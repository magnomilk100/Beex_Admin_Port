import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.checkList.fields.id'),
  },
  {
    name: 'data',
    label: i18n('entities.checkList.fields.data'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'cliente',
    label: i18n('entities.checkList.fields.cliente'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'aceiteDeRisco',
    label: i18n('entities.checkList.fields.aceiteDeRisco'),
  },
  {
    name: 'emailBoasVindas',
    label: i18n('entities.checkList.fields.emailBoasVindas'),
  },
  {
    name: 'clienteRoundCube',
    label: i18n('entities.checkList.fields.clienteRoundCube'),
  },
  {
    name: 'suportePrimario',
    label: i18n('entities.checkList.fields.suportePrimario'),
  },
  {
    name: 'enviadoDe',
    label: i18n('entities.checkList.fields.enviadoDe'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'processandoPor',
    label: i18n('entities.checkList.fields.processandoPor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'observacao',
    label: i18n('entities.checkList.fields.observacao'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.checkList.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.checkList.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
