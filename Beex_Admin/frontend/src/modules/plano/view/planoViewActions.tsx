import PlanoService from 'src/modules/plano/planoService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PLANO_VIEW';

const planoViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: planoViewActions.FIND_STARTED,
      });

      const record = await PlanoService.find(id);

      dispatch({
        type: planoViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoViewActions.FIND_ERROR,
      });

      getHistory().push('/plano');
    }
  },
};

export default planoViewActions;
