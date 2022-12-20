import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import RegistroDiarioRepository from '../database/repositories/registroDiarioRepository';
import ClienteRepository from '../database/repositories/clienteRepository';
import RoboRepository from '../database/repositories/roboRepository';
import ContaRepository from '../database/repositories/contaRepository';
import PedidoRepository from '../database/repositories/pedidoRepository';
var moment = require('moment'); //Adicionado por Magno
export default class RegistroDiarioService {
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
      data.robo = await RoboRepository.filterIdInTenant(data.robo, { ...this.options, session });
      data.conta = await ContaRepository.filterIdInTenant(data.conta, { ...this.options, session });

      const record = await RegistroDiarioRepository.create(data, {
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
        'registroDiario',
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
      data.robo = await RoboRepository.filterIdInTenant(data.robo, { ...this.options, session });
      data.conta = await ContaRepository.filterIdInTenant(data.conta, { ...this.options, session });

      const record = await RegistroDiarioRepository.update(
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
        'registroDiario',
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
        await RegistroDiarioRepository.destroy(id, {
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
    return RegistroDiarioRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return RegistroDiarioRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return RegistroDiarioRepository.findAndCountAll(
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
    const count = await RegistroDiarioRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }

/* Criado por Magno */
  async destroyOneId(id) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
	
      //for (const id of ids) {
        await RegistroDiarioRepository.destroy(id, {
          ...this.options,
          session,
        });
      //}

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findByContaRoboData(conta_id, robo_id, data1){
    const session = await MongooseRepository.createSession(
      this.options.database,
    );    
	console.log("Services - findByContaRoboData - Antes ");
    var registroDiario = RegistroDiarioRepository.findByContaRoboData(conta_id, robo_id, data1, this.options);
	console.log("Services - findByContaRoboData - Depois ");
    return registroDiario;
  }

  async findByClientId(cliente_id) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );
    var pedido = PedidoRepository.findByClientId(cliente_id, this.options);
    return pedido;
  }
/* Criado por Magno */  
}

