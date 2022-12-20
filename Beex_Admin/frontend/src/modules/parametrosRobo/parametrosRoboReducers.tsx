import list from 'src/modules/parametrosRobo/list/parametrosRoboListReducers';
import form from 'src/modules/parametrosRobo/form/parametrosRoboFormReducers';
import view from 'src/modules/parametrosRobo/view/parametrosRoboViewReducers';
import destroy from 'src/modules/parametrosRobo/destroy/parametrosRoboDestroyReducers';
import importerReducer from 'src/modules/parametrosRobo/importer/parametrosRoboImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
