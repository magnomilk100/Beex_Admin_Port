import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/corretora/importer/corretoraImporterSelectors';
import CorretoraService from 'src/modules/corretora/corretoraService';
import fields from 'src/modules/corretora/importer/corretoraImporterFields';
import { i18n } from 'src/i18n';

const corretoraImporterActions = importerActions(
  'CORRETORA_IMPORTER',
  selectors,
  CorretoraService.import,
  fields,
  i18n('entities.corretora.importer.fileName'),
);

export default corretoraImporterActions;