import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.parametrosRobo.fields.id'),
  },
  {
    name: 'data',
    label: i18n('entities.parametrosRobo.fields.data'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'robo',
    label: i18n('entities.parametrosRobo.fields.robo'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'versao',
    label: i18n('entities.parametrosRobo.fields.versao'),
  },
  {
    name: 'configuracao',
    label: i18n('entities.parametrosRobo.fields.configuracao'),
  },
  {
    name: 'observacao',
    label: i18n('entities.parametrosRobo.fields.observacao'),
  },
  {
    name: 'parametros',
    label: i18n('entities.parametrosRobo.fields.parametros'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.parametrosRobo.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.parametrosRobo.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
