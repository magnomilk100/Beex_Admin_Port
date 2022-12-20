import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'cliente',
    label: i18n('entities.registroDiario.fields.cliente'),
    schema: schemas.relationToOne(
      i18n('entities.registroDiario.fields.cliente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'robo',
    label: i18n('entities.registroDiario.fields.robo'),
    schema: schemas.relationToOne(
      i18n('entities.registroDiario.fields.robo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'versao',
    label: i18n('entities.registroDiario.fields.versao'),
    schema: schemas.string(
      i18n('entities.registroDiario.fields.versao'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'numeroMagico',
    label: i18n('entities.registroDiario.fields.numeroMagico'),
    schema: schemas.string(
      i18n('entities.registroDiario.fields.numeroMagico'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'qtdContratos',
    label: i18n('entities.registroDiario.fields.qtdContratos'),
    schema: schemas.integer(
      i18n('entities.registroDiario.fields.qtdContratos'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'data',
    label: i18n('entities.registroDiario.fields.data'),
    schema: schemas.date(
      i18n('entities.registroDiario.fields.data'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'numeroChart',
    label: i18n('entities.registroDiario.fields.numeroChart'),
    schema: schemas.string(
      i18n('entities.registroDiario.fields.numeroChart'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'conta',
    label: i18n('entities.registroDiario.fields.conta'),
    schema: schemas.relationToOne(
      i18n('entities.registroDiario.fields.conta'),
      {
        "required": true
      },
    ),
  },
];