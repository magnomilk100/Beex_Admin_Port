import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.registroDiario.fields.id'),
  },
  {
    name: 'cliente',
    label: i18n('entities.registroDiario.fields.cliente'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'robo',
    label: i18n('entities.registroDiario.fields.robo'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'versao',
    label: i18n('entities.registroDiario.fields.versao'),
  },
  {
    name: 'numeroMagico',
    label: i18n('entities.registroDiario.fields.numeroMagico'),
  },
  {
    name: 'qtdContratos',
    label: i18n('entities.registroDiario.fields.qtdContratos'),
  },
  {
    name: 'data',
    label: i18n('entities.registroDiario.fields.data'),
  },
  {
    name: 'numeroChart',
    label: i18n('entities.registroDiario.fields.numeroChart'),
  },
  {
    name: 'conta',
    label: i18n('entities.registroDiario.fields.conta'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.registroDiario.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.registroDiario.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
