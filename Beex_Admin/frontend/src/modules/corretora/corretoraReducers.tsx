import list from 'src/modules/corretora/list/corretoraListReducers';
import form from 'src/modules/corretora/form/corretoraFormReducers';
import view from 'src/modules/corretora/view/corretoraViewReducers';
import destroy from 'src/modules/corretora/destroy/corretoraDestroyReducers';
import importerReducer from 'src/modules/corretora/importer/corretoraImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
