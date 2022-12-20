import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import checkListEnumerators from 'src/modules/checkList/checkListEnumerators';
import moment from 'moment';

export default [
  {
    name: 'data',
    label: i18n('entities.checkList.fields.data'),
    schema: schemas.datetime(
      i18n('entities.checkList.fields.data'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'cliente',
    label: i18n('entities.checkList.fields.cliente'),
    schema: schemas.relationToOne(
      i18n('entities.checkList.fields.cliente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'aceiteDeRisco',
    label: i18n('entities.checkList.fields.aceiteDeRisco'),
    schema: schemas.enumerator(
      i18n('entities.checkList.fields.aceiteDeRisco'),
      {
        "required": true,
        "options": checkListEnumerators.aceiteDeRisco
      },
    ),
  },
  {
    name: 'emailBoasVindas',
    label: i18n('entities.checkList.fields.emailBoasVindas'),
    schema: schemas.enumerator(
      i18n('entities.checkList.fields.emailBoasVindas'),
      {
        "required": true,
        "options": checkListEnumerators.emailBoasVindas
      },
    ),
  },
  {
    name: 'clienteRoundCube',
    label: i18n('entities.checkList.fields.clienteRoundCube'),
    schema: schemas.enumerator(
      i18n('entities.checkList.fields.clienteRoundCube'),
      {
        "required": true,
        "options": checkListEnumerators.clienteRoundCube
      },
    ),
  },
  {
    name: 'suportePrimario',
    label: i18n('entities.checkList.fields.suportePrimario'),
    schema: schemas.enumerator(
      i18n('entities.checkList.fields.suportePrimario'),
      {
        "required": true,
        "options": checkListEnumerators.suportePrimario
      },
    ),
  },
  {
    name: 'enviadoDe',
    label: i18n('entities.checkList.fields.enviadoDe'),
    schema: schemas.relationToOne(
      i18n('entities.checkList.fields.enviadoDe'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'processandoPor',
    label: i18n('entities.checkList.fields.processandoPor'),
    schema: schemas.relationToOne(
      i18n('entities.checkList.fields.processandoPor'),
      {},
    ),
  },
  {
    name: 'observacao',
    label: i18n('entities.checkList.fields.observacao'),
    schema: schemas.string(
      i18n('entities.checkList.fields.observacao'),
      {},
    ),
  },
];