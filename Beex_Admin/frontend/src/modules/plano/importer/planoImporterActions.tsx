import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/plano/importer/planoImporterSelectors';
import PlanoService from 'src/modules/plano/planoService';
import fields from 'src/modules/plano/importer/planoImporterFields';
import { i18n } from 'src/i18n';

const planoImporterActions = importerActions(
  'PLANO_IMPORTER',
  selectors,
  PlanoService.import,
  fields,
  i18n('entities.plano.importer.fileName'),
);

export default planoImporterActions;