import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import PedidoRepository from '../database/repositories/pedidoRepository';
import ClienteRepository from '../database/repositories/clienteRepository';
import RoboRepository from '../database/repositories/roboRepository';
import PlanoRepository from '../database/repositories/planoRepository';
import UserRepository from '../database/repositories/userRepository';
import ContaRepository from '../database/repositories/contaRepository';

export default class PedidoService {
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
      data.plano = await PlanoRepository.filterIdInTenant(data.plano, { ...this.options, session });
      data.indicadoPor = await UserRepository.filterIdInTenant(data.indicadoPor, { ...this.options, session });

      const record = await PedidoRepository.create(data, {
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
        'pedido',
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
      data.plano = await PlanoRepository.filterIdInTenant(data.plano, { ...this.options, session });
      data.indicadoPor = await UserRepository.filterIdInTenant(data.indicadoPor, { ...this.options, session });

      const record = await PedidoRepository.update(
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
        'pedido',
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
        await PedidoRepository.destroy(id, {
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
    return PedidoRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return PedidoRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return PedidoRepository.findAndCountAll(
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
    const count = await PedidoRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }

  /** Criado por Magno */
  async findByIdMetatraderCorretora(idMetatraderCorretora){

    console.log("*********  " + new Date() + "  *********");    
    console.log("idMetatraderCorretora = " + idMetatraderCorretora);

    let conta = await ContaRepository.findByIdMetatraderCorretora(idMetatraderCorretora, this.options);
    //let cliente = await ClienteRepository.findById(id, this.options);

    var id = conta.cliente._id;
    var nome = conta.cliente.nome;

    console.log("nome = " + nome);
    console.log("cliente._id = " + id);

    return PedidoRepository.findByClientId(id, this.options);
  }

  async findByIdMetatraderCorretoraAndRoboId(idMetatraderCorretora, roboId){

    console.log("*********  " + new Date() + "  *********");    
    console.log("idMetatraderCorretora = " + idMetatraderCorretora);
    console.log("roboId = " + roboId);	

    let conta = await ContaRepository.findByIdMetatraderCorretora(idMetatraderCorretora, this.options);
    //let cliente = await ClienteRepository.findById(id, this.options);

    var id = conta.cliente._id;
    var nome = conta.cliente.nome;

    console.log("nome = " + nome);
    console.log("cliente._id = " + id);

    return PedidoRepository.findByClientIdAndRoboId(id, roboId, this.options);
  }

  async findByClienteId(cliente_id){
    let pedido = await PedidoRepository.findByClientId(cliente_id, this.options);
    //let cliente = await ClienteRepository.findById(id, this.options);
    return pedido;
  }
  
  async findByClienteIdAndRoboId(cliente_id, roboId){
    let pedido = await PedidoRepository.findByClientId(cliente_id, roboId, this.options);
    //let cliente = await ClienteRepository.findById(id, this.options);
    return pedido;
  }
  /** Criado por Magno */
}
