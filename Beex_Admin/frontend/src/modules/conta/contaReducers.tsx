import list from 'src/modules/conta/list/contaListReducers';
import form from 'src/modules/conta/form/contaFormReducers';
import view from 'src/modules/conta/view/contaViewReducers';
import destroy from 'src/modules/conta/destroy/contaDestroyReducers';
import importerReducer from 'src/modules/conta/importer/contaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
