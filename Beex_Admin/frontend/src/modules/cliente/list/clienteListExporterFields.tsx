import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cliente.fields.id'),
  },
  {
    name: 'nome',
    label: i18n('entities.cliente.fields.nome'),
  },
  {
    name: 'email',
    label: i18n('entities.cliente.fields.email'),
  },
  {
    name: 'cpf',
    label: i18n('entities.cliente.fields.cpf'),
  },
  {
    name: 'telefone',
    label: i18n('entities.cliente.fields.telefone'),
  },
  {
    name: 'cidade',
    label: i18n('entities.cliente.fields.cidade'),
  },
  {
    name: 'pais',
    label: i18n('entities.cliente.fields.pais'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'observacoes',
    label: i18n('entities.cliente.fields.observacoes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cliente.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cliente.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
