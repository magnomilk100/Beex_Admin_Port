import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import ParametrosRoboRepository from '../database/repositories/parametrosRoboRepository';
import RoboRepository from '../database/repositories/roboRepository';

export default class ParametrosRoboService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.robo = await RoboRepository.filterIdInTenant(data.robo, { ...this.options, session });

      const record = await ParametrosRoboRepository.create(data, {
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
        'parametrosRobo',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.robo = await RoboRepository.filterIdInTenant(data.robo, { ...this.options, session });

      const record = await ParametrosRoboRepository.update(
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
        'parametrosRobo',
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
        await ParametrosRoboRepository.destroy(id, {
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
    return ParametrosRoboRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return ParametrosRoboRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return ParametrosRoboRepository.findAndCountAll(
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
    const count = await ParametrosRoboRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }

/*by Magno */

  async findByConfiguracao(robo_id, versao, configuracao) {
    

console.log("in SErvices - -----   robo_id = " + robo_id);

    return ParametrosRoboRepository.findByConfiguracao(robo_id, versao, configuracao, this.options);
  }
  
/*by Magno*/


}
