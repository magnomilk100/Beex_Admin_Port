import list from 'src/modules/ordem/list/ordemListReducers';
import form from 'src/modules/ordem/form/ordemFormReducers';
import view from 'src/modules/ordem/view/ordemViewReducers';
import destroy from 'src/modules/ordem/destroy/ordemDestroyReducers';
import importerReducer from 'src/modules/ordem/importer/ordemImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
