import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.conta.fields.id'),
  },
  {
    name: 'cliente',
    label: i18n('entities.conta.fields.cliente'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'corretora',
    label: i18n('entities.conta.fields.corretora'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'idMetatraderCorretora',
    label: i18n('entities.conta.fields.idMetatraderCorretora'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.conta.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.conta.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
