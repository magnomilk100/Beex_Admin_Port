import list from 'src/modules/registroDiario/list/registroDiarioListReducers';
import form from 'src/modules/registroDiario/form/registroDiarioFormReducers';
import view from 'src/modules/registroDiario/view/registroDiarioViewReducers';
import destroy from 'src/modules/registroDiario/destroy/registroDiarioDestroyReducers';
import importerReducer from 'src/modules/registroDiario/importer/registroDiarioImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
