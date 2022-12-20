import list from 'src/modules/plano/list/planoListReducers';
import form from 'src/modules/plano/form/planoFormReducers';
import view from 'src/modules/plano/view/planoViewReducers';
import destroy from 'src/modules/plano/destroy/planoDestroyReducers';
import importerReducer from 'src/modules/plano/importer/planoImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
