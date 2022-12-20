import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import pedidoEnumerators from 'src/modules/pedido/pedidoEnumerators';
import moment from 'moment';

export default [
  {
    name: 'cliente',
    label: i18n('entities.pedido.fields.cliente'),
    schema: schemas.relationToOne(
      i18n('entities.pedido.fields.cliente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'robo',
    label: i18n('entities.pedido.fields.robo'),
    schema: schemas.relationToOne(
      i18n('entities.pedido.fields.robo'),
      {},
    ),
  },
  {
    name: 'plano',
    label: i18n('entities.pedido.fields.plano'),
    schema: schemas.relationToOne(
      i18n('entities.pedido.fields.plano'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'indicadoPor',
    label: i18n('entities.pedido.fields.indicadoPor'),
    schema: schemas.relationToOne(
      i18n('entities.pedido.fields.indicadoPor'),
      {},
    ),
  },
  {
    name: 'dataInicio',
    label: i18n('entities.pedido.fields.dataInicio'),
    schema: schemas.date(
      i18n('entities.pedido.fields.dataInicio'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dataTermino',
    label: i18n('entities.pedido.fields.dataTermino'),
    schema: schemas.date(
      i18n('entities.pedido.fields.dataTermino'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dataEmailCobranca',
    label: i18n('entities.pedido.fields.dataEmailCobranca'),
    schema: schemas.date(
      i18n('entities.pedido.fields.dataEmailCobranca'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'valorPago',
    label: i18n('entities.pedido.fields.valorPago'),
    schema: schemas.decimal(
      i18n('entities.pedido.fields.valorPago'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'plataformaDePagamento',
    label: i18n('entities.pedido.fields.plataformaDePagamento'),
    schema: schemas.enumerator(
      i18n('entities.pedido.fields.plataformaDePagamento'),
      {
        "required": true,
        "options": pedidoEnumerators.plataformaDePagamento
      },
    ),
  },
  {
    name: 'duracaoPlano',
    label: i18n('entities.pedido.fields.duracaoPlano'),
    schema: schemas.enumerator(
      i18n('entities.pedido.fields.duracaoPlano'),
      {
        "required": true,
        "options": pedidoEnumerators.duracaoPlano
      },
    ),
  },
];