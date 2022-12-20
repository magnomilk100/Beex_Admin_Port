import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/checkList/importer/checkListImporterSelectors';
import CheckListService from 'src/modules/checkList/checkListService';
import fields from 'src/modules/checkList/importer/checkListImporterFields';
import { i18n } from 'src/i18n';

const checkListImporterActions = importerActions(
  'CHECKLIST_IMPORTER',
  selectors,
  CheckListService.import,
  fields,
  i18n('entities.checkList.importer.fileName'),
);

export default checkListImporterActions;