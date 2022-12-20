import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/parametrosRobo/importer/parametrosRoboImporterSelectors';
import ParametrosRoboService from 'src/modules/parametrosRobo/parametrosRoboService';
import fields from 'src/modules/parametrosRobo/importer/parametrosRoboImporterFields';
import { i18n } from 'src/i18n';

const parametrosRoboImporterActions = importerActions(
  'PARAMETROSROBO_IMPORTER',
  selectors,
  ParametrosRoboService.import,
  fields,
  i18n('entities.parametrosRobo.importer.fileName'),
);

export default parametrosRoboImporterActions;