import list from 'src/modules/robo/list/roboListReducers';
import form from 'src/modules/robo/form/roboFormReducers';
import view from 'src/modules/robo/view/roboViewReducers';
import destroy from 'src/modules/robo/destroy/roboDestroyReducers';
import importerReducer from 'src/modules/robo/importer/roboImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
