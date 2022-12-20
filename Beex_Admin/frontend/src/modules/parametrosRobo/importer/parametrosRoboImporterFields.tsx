import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import parametrosRoboEnumerators from 'src/modules/parametrosRobo/parametrosRoboEnumerators';
import moment from 'moment';

export default [
  {
    name: 'data',
    label: i18n('entities.parametrosRobo.fields.data'),
    schema: schemas.datetime(
      i18n('entities.parametrosRobo.fields.data'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'robo',
    label: i18n('entities.parametrosRobo.fields.robo'),
    schema: schemas.relationToOne(
      i18n('entities.parametrosRobo.fields.robo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'versao',
    label: i18n('entities.parametrosRobo.fields.versao'),
    schema: schemas.string(
      i18n('entities.parametrosRobo.fields.versao'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'configuracao',
    label: i18n('entities.parametrosRobo.fields.configuracao'),
    schema: schemas.enumerator(
      i18n('entities.parametrosRobo.fields.configuracao'),
      {
        "options": parametrosRoboEnumerators.configuracao
      },
    ),
  },
  {
    name: 'observacao',
    label: i18n('entities.parametrosRobo.fields.observacao'),
    schema: schemas.string(
      i18n('entities.parametrosRobo.fields.observacao'),
      {},
    ),
  },
  {
    name: 'parametros',
    label: i18n('entities.parametrosRobo.fields.parametros'),
    schema: schemas.string(
      i18n('entities.parametrosRobo.fields.parametros'),
      {
        "required": true
      },
    ),
  },
];