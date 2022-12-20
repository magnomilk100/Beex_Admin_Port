import OrdemService from 'src/modules/ordem/ordemService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ORDEM_VIEW';

const ordemViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ordemViewActions.FIND_STARTED,
      });

      const record = await OrdemService.find(id);

      dispatch({
        type: ordemViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ordemViewActions.FIND_ERROR,
      });

      getHistory().push('/ordem');
    }
  },
};

export default ordemViewActions;
