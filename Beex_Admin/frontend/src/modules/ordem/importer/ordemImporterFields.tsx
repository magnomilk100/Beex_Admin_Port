import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import ordemEnumerators from 'src/modules/ordem/ordemEnumerators';
import moment from 'moment';

export default [
  {
    name: 'conta',
    label: i18n('entities.ordem.fields.conta'),
    schema: schemas.relationToOne(
      i18n('entities.ordem.fields.conta'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'tipo',
    label: i18n('entities.ordem.fields.tipo'),
    schema: schemas.enumerator(
      i18n('entities.ordem.fields.tipo'),
      {
        "required": true,
        "options": ordemEnumerators.tipo
      },
    ),
  },
  {
    name: 'direcao',
    label: i18n('entities.ordem.fields.direcao'),
    schema: schemas.enumerator(
      i18n('entities.ordem.fields.direcao'),
      {
        "required": true,
        "options": ordemEnumerators.direcao
      },
    ),
  },
  {
    name: 'precoEntrada',
    label: i18n('entities.ordem.fields.precoEntrada'),
    schema: schemas.decimal(
      i18n('entities.ordem.fields.precoEntrada'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'robo',
    label: i18n('entities.ordem.fields.robo'),
    schema: schemas.relationToOne(
      i18n('entities.ordem.fields.robo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'versao',
    label: i18n('entities.ordem.fields.versao'),
    schema: schemas.string(
      i18n('entities.ordem.fields.versao'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dataHora',
    label: i18n('entities.ordem.fields.dataHora'),
    schema: schemas.datetime(
      i18n('entities.ordem.fields.dataHora'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
];