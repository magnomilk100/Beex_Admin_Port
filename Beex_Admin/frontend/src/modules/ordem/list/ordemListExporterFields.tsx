import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.ordem.fields.id'),
  },
  {
    name: 'conta',
    label: i18n('entities.ordem.fields.conta'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'tipo',
    label: i18n('entities.ordem.fields.tipo'),
  },
  {
    name: 'direcao',
    label: i18n('entities.ordem.fields.direcao'),
  },
  {
    name: 'precoEntrada',
    label: i18n('entities.ordem.fields.precoEntrada'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'robo',
    label: i18n('entities.ordem.fields.robo'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'versao',
    label: i18n('entities.ordem.fields.versao'),
  },
  {
    name: 'dataHora',
    label: i18n('entities.ordem.fields.dataHora'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.ordem.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.ordem.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
