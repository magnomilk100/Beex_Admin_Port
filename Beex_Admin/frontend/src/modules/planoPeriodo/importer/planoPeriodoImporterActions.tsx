import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/planoPeriodo/importer/planoPeriodoImporterSelectors';
import PlanoPeriodoService from 'src/modules/planoPeriodo/planoPeriodoService';
import fields from 'src/modules/planoPeriodo/importer/planoPeriodoImporterFields';
import { i18n } from 'src/i18n';

const planoPeriodoImporterActions = importerActions(
  'PLANOPERIODO_IMPORTER',
  selectors,
  PlanoPeriodoService.import,
  fields,
  i18n('entities.planoPeriodo.importer.fileName'),
);

export default planoPeriodoImporterActions;