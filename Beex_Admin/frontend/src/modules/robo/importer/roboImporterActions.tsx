import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/robo/importer/roboImporterSelectors';
import RoboService from 'src/modules/robo/roboService';
import fields from 'src/modules/robo/importer/roboImporterFields';
import { i18n } from 'src/i18n';

const roboImporterActions = importerActions(
  'ROBO_IMPORTER',
  selectors,
  RoboService.import,
  fields,
  i18n('entities.robo.importer.fileName'),
);

export default roboImporterActions;