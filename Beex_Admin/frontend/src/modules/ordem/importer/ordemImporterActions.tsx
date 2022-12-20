import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/ordem/importer/ordemImporterSelectors';
import OrdemService from 'src/modules/ordem/ordemService';
import fields from 'src/modules/ordem/importer/ordemImporterFields';
import { i18n } from 'src/i18n';

const ordemImporterActions = importerActions(
  'ORDEM_IMPORTER',
  selectors,
  OrdemService.import,
  fields,
  i18n('entities.ordem.importer.fileName'),
);

export default ordemImporterActions;