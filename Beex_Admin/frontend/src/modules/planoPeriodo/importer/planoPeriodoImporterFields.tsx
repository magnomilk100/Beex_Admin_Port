import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import planoPeriodoEnumerators from 'src/modules/planoPeriodo/planoPeriodoEnumerators';

export default [
  {
    name: 'plano',
    label: i18n('entities.planoPeriodo.fields.plano'),
    schema: schemas.relationToOne(
      i18n('entities.planoPeriodo.fields.plano'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'periodicidade',
    label: i18n('entities.planoPeriodo.fields.periodicidade'),
    schema: schemas.enumerator(
      i18n('entities.planoPeriodo.fields.periodicidade'),
      {
        "required": true,
        "options": planoPeriodoEnumerators.periodicidade
      },
    ),
  },
  {
    name: 'qrCode',
    label: i18n('entities.planoPeriodo.fields.qrCode'),
    schema: schemas.images(
      i18n('entities.planoPeriodo.fields.qrCode'),
      {},
    ),
  },
  {
    name: 'valor',
    label: i18n('entities.planoPeriodo.fields.valor'),
    schema: schemas.decimal(
      i18n('entities.planoPeriodo.fields.valor'),
      {
        "required": true
      },
    ),
  },
];