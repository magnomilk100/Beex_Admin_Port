import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.pedido.fields.id'),
  },
  {
    name: 'cliente',
    label: i18n('entities.pedido.fields.cliente'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'robo',
    label: i18n('entities.pedido.fields.robo'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'plano',
    label: i18n('entities.pedido.fields.plano'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'indicadoPor',
    label: i18n('entities.pedido.fields.indicadoPor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dataInicio',
    label: i18n('entities.pedido.fields.dataInicio'),
  },
  {
    name: 'dataTermino',
    label: i18n('entities.pedido.fields.dataTermino'),
  },
  {
    name: 'dataEmailCobranca',
    label: i18n('entities.pedido.fields.dataEmailCobranca'),
  },
  {
    name: 'valorPago',
    label: i18n('entities.pedido.fields.valorPago'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'plataformaDePagamento',
    label: i18n('entities.pedido.fields.plataformaDePagamento'),
  },
  {
    name: 'duracaoPlano',
    label: i18n('entities.pedido.fields.duracaoPlano'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.pedido.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.pedido.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
