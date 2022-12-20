import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import ContaRepository from '../database/repositories/contaRepository';
import ClienteRepository from '../database/repositories/clienteRepository';
import CorretoraRepository from '../database/repositories/corretoraRepository';

export default class ContaService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.cliente = await ClienteRepository.filterIdInTenant(data.cliente, { ...this.options, session });
      data.corretora = await CorretoraRepository.filterIdInTenant(data.corretora, { ...this.options, session });

      const record = await ContaRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'conta',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.cliente = await ClienteRepository.filterIdInTenant(data.cliente, { ...this.options, session });
      data.corretora = await CorretoraRepository.filterIdInTenant(data.corretora, { ...this.options, session });

      const record = await ContaRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'conta',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await ContaRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    return ContaRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return ContaRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return ContaRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await ContaRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
