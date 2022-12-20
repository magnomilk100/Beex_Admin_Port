import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.plano.fields.id'),
  },
  {
    name: 'nome',
    label: i18n('entities.plano.fields.nome'),
  },
  {
    name: 'qtdDeContratos',
    label: i18n('entities.plano.fields.qtdDeContratos'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.plano.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.plano.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
