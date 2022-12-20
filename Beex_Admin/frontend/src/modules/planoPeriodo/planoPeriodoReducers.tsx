import list from 'src/modules/planoPeriodo/list/planoPeriodoListReducers';
import form from 'src/modules/planoPeriodo/form/planoPeriodoFormReducers';
import view from 'src/modules/planoPeriodo/view/planoPeriodoViewReducers';
import destroy from 'src/modules/planoPeriodo/destroy/planoPeriodoDestroyReducers';
import importerReducer from 'src/modules/planoPeriodo/importer/planoPeriodoImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
