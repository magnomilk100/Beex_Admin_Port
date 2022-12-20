import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.corretora.fields.id'),
  },
  {
    name: 'nome',
    label: i18n('entities.corretora.fields.nome'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.corretora.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.corretora.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
