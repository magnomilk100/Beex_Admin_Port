import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.planoPeriodo.fields.id'),
  },
  {
    name: 'plano',
    label: i18n('entities.planoPeriodo.fields.plano'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'periodicidade',
    label: i18n('entities.planoPeriodo.fields.periodicidade'),
  },
  {
    name: 'qrCode',
    label: i18n('entities.planoPeriodo.fields.qrCode'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'valor',
    label: i18n('entities.planoPeriodo.fields.valor'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.planoPeriodo.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.planoPeriodo.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
