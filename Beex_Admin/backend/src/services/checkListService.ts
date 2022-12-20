import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import CheckListRepository from '../database/repositories/checkListRepository';
import ClienteRepository from '../database/repositories/clienteRepository';
import UserRepository from '../database/repositories/userRepository';

export default class CheckListService {
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
      data.enviadoDe = await UserRepository.filterIdInTenant(data.enviadoDe, { ...this.options, session });
      data.processandoPor = await UserRepository.filterIdInTenant(data.processandoPor, { ...this.options, session });

      const record = await CheckListRepository.create(data, {
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
        'checkList',
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
      data.enviadoDe = await UserRepository.filterIdInTenant(data.enviadoDe, { ...this.options, session });
      data.processandoPor = await UserRepository.filterIdInTenant(data.processandoPor, { ...this.options, session });

      const record = await CheckListRepository.update(
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
        'checkList',
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
        await CheckListRepository.destroy(id, {
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
    return CheckListRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return CheckListRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return CheckListRepository.findAndCountAll(
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
    const count = await CheckListRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
