import MongooseRepository from './mongooseRepository';
import MongooseQueryUtils from '../utils/mongooseQueryUtils';
import AuditLogRepository from './auditLogRepository';
import Error404 from '../../errors/Error404';
import { IRepositoryOptions } from './IRepositoryOptions';
import lodash from 'lodash';
import RegistroDiario from '../models/registroDiario';

class RegistroDiarioRepository {
  
  static async create(data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await RegistroDiario(
      options.database,
    ).create(
      [
        {
          ...data,
          tenant: currentTenant.id,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        }
      ],
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      RegistroDiario(options.database).findOne({_id: id, tenant: currentTenant.id}),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    await RegistroDiario(options.database).updateOne(
      { _id: id },
      {
        ...data,
        updatedBy: MongooseRepository.getCurrentUser(
          options,
        ).id,
      },
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    record = await this.findById(id, options);



    return record;
  }

  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      RegistroDiario(options.database).findOne({_id: id, tenant: currentTenant.id}),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    await RegistroDiario(options.database).deleteOne({ _id: id }, options);

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      record,
      options,
    );


  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    const records = await RegistroDiario(options.database)
      .find({
        _id: { $in: ids },
        tenant: currentTenant.id,
      })
      .select(['_id']);

    return records.map((record) => record._id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    return MongooseRepository.wrapWithSessionIfExists(
      RegistroDiario(options.database).countDocuments({
        ...filter,
        tenant: currentTenant.id,
      }),
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      RegistroDiario(options.database)
        .findOne({_id: id, tenant: currentTenant.id})
      .populate('cliente')
      .populate('robo')
      .populate('conta'),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    return this._mapRelationshipsAndFillDownloadUrl(record);
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: any = [];
    
    criteriaAnd.push({
      tenant: currentTenant.id,
    });

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.cliente) {
        criteriaAnd.push({
          cliente: MongooseQueryUtils.uuid(
            filter.cliente,
          ),
        });
      }

      if (filter.robo) {
        criteriaAnd.push({
          robo: MongooseQueryUtils.uuid(
            filter.robo,
          ),
        });
      }

      if (filter.versao) {
        criteriaAnd.push({
          versao: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.versao,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.numeroMagico) {
        criteriaAnd.push({
          numeroMagico: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.numeroMagico,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.qtdContratosRange) {
        const [start, end] = filter.qtdContratosRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            qtdContratos: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            qtdContratos: {
              $lte: end,
            },
          });
        }
      }

      if (filter.dataRange) {
        const [start, end] = filter.dataRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            data: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            data: {
              $lte: end,
            },
          });
        }
      }

      if (filter.numeroChart) {
        criteriaAnd.push({
          numeroChart: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.numeroChart,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.conta) {
        criteriaAnd.push({
          conta: MongooseQueryUtils.uuid(
            filter.conta,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $lte: end,
            },
          });
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length
      ? { $and: criteriaAnd }
      : null;

    let rows = await RegistroDiario(options.database)
      .find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('cliente')
      .populate('robo')
      .populate('conta');

    const count = await RegistroDiario(
      options.database,
    ).countDocuments(criteria);

    rows = await Promise.all(
      rows.map(this._mapRelationshipsAndFillDownloadUrl),
    );

    return { rows, count };
  }

  static async findAllAutocomplete(search, limit, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: Array<any> = [{
      tenant: currentTenant.id,
    }];

    if (search) {
      criteriaAnd.push({
        $or: [
          {
            _id: MongooseQueryUtils.uuid(search),
          },
          
        ],
      });
    }

    const sort = MongooseQueryUtils.sort('id_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const criteria = { $and: criteriaAnd };

    const records = await RegistroDiario(options.database)
      .find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  static async _createAuditLog(action, id, data, options: IRepositoryOptions) {
    await AuditLogRepository.log(
      {
        entityName: RegistroDiario(options.database).modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }

  static async _mapRelationshipsAndFillDownloadUrl(record) {
    if (!record) {
      return null;
    }

    const output = record.toObject
      ? record.toObject()
      : record;

    return output;
  }

/** Criado por Magno */
  static async findByContaRoboData(conta_id,robo_id,data1, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      RegistroDiario(options.database).find({'conta': Object(conta_id), 'robo': Object(robo_id), 'data': data1,  tenant: currentTenant.id})
      .populate('cliente')
      .populate('robo')
      .populate('conta'),
      options,
    );

    if (!record) {
      throw new Error404();
    }
    return this._mapRelationshipsAndFillDownloadUrl(record);
  }

/** Criado por magno */


}

export default RegistroDiarioRepository;
