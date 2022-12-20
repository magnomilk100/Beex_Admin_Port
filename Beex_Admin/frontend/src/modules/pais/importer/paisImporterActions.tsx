import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/pais/importer/paisImporterSelectors';
import PaisService from 'src/modules/pais/paisService';
import fields from 'src/modules/pais/importer/paisImporterFields';
import { i18n } from 'src/i18n';

const paisImporterActions = importerActions(
  'PAIS_IMPORTER',
  selectors,
  PaisService.import,
  fields,
  i18n('entities.pais.importer.fileName'),
);

export default paisImporterActions;