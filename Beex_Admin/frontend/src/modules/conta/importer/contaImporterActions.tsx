import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/conta/importer/contaImporterSelectors';
import ContaService from 'src/modules/conta/contaService';
import fields from 'src/modules/conta/importer/contaImporterFields';
import { i18n } from 'src/i18n';

const contaImporterActions = importerActions(
  'CONTA_IMPORTER',
  selectors,
  ContaService.import,
  fields,
  i18n('entities.conta.importer.fileName'),
);

export default contaImporterActions;