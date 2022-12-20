import CorretoraService from 'src/modules/corretora/corretoraService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CORRETORA_VIEW';

const corretoraViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: corretoraViewActions.FIND_STARTED,
      });

      const record = await CorretoraService.find(id);

      dispatch({
        type: corretoraViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: corretoraViewActions.FIND_ERROR,
      });

      getHistory().push('/corretora');
    }
  },
};

export default corretoraViewActions;
