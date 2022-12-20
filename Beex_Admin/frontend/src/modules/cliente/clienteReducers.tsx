import list from 'src/modules/cliente/list/clienteListReducers';
import form from 'src/modules/cliente/form/clienteFormReducers';
import view from 'src/modules/cliente/view/clienteViewReducers';
import destroy from 'src/modules/cliente/destroy/clienteDestroyReducers';
import importerReducer from 'src/modules/cliente/importer/clienteImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
