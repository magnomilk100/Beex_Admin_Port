import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pedido/importer/pedidoImporterSelectors';
import PedidoService from 'src/modules/pedido/pedidoService';
import fields from 'src/modules/pedido/importer/pedidoImporterFields';
import { i18n } from 'src/i18n';

const pedidoImporterActions = importerActions(
  'PEDIDO_IMPORTER',
  selectors,
  PedidoService.import,
  fields,
  i18n('entities.pedido.importer.fileName'),
);

export default pedidoImporterActions;