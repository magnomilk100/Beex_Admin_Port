import list from 'src/modules/checkList/list/checkListListReducers';
import form from 'src/modules/checkList/form/checkListFormReducers';
import view from 'src/modules/checkList/view/checkListViewReducers';
import destroy from 'src/modules/checkList/destroy/checkListDestroyReducers';
import importerReducer from 'src/modules/checkList/importer/checkListImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
