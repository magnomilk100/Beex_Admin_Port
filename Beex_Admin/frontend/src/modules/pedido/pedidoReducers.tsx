import list from 'src/modules/pedido/list/pedidoListReducers';
import form from 'src/modules/pedido/form/pedidoFormReducers';
import view from 'src/modules/pedido/view/pedidoViewReducers';
import destroy from 'src/modules/pedido/destroy/pedidoDestroyReducers';
import importerReducer from 'src/modules/pedido/importer/pedidoImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
