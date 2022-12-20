import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.robo.fields.id'),
  },
  {
    name: 'nome',
    label: i18n('entities.robo.fields.nome'),
  },
  {
    name: 'ativo',
    label: i18n('entities.robo.fields.ativo'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.robo.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.robo.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
