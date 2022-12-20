import PlanoPeriodoService from 'src/modules/planoPeriodo/planoPeriodoService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLANOPERIODO_VIEW';

const planoPeriodoViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: planoPeriodoViewActions.FIND_STARTED,
      });

      const record = await PlanoPeriodoService.find(id);

      dispatch({
        type: planoPeriodoViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoPeriodoViewActions.FIND_ERROR,
      });

      getHistory().push('/plano-periodo');
    }
  },
};

export default planoPeriodoViewActions;
