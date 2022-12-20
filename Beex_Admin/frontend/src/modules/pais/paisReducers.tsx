import list from 'src/modules/pais/list/paisListReducers';
import form from 'src/modules/pais/form/paisFormReducers';
import view from 'src/modules/pais/view/paisViewReducers';
import destroy from 'src/modules/pais/destroy/paisDestroyReducers';
import importerReducer from 'src/modules/pais/importer/paisImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
