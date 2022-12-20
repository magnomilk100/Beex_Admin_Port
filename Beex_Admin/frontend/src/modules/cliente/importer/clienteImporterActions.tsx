import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cliente/importer/clienteImporterSelectors';
import ClienteService from 'src/modules/cliente/clienteService';
import fields from 'src/modules/cliente/importer/clienteImporterFields';
import { i18n } from 'src/i18n';

const clienteImporterActions = importerActions(
  'CLIENTE_IMPORTER',
  selectors,
  ClienteService.import,
  fields,
  i18n('entities.cliente.importer.fileName'),
);

export default clienteImporterActions;