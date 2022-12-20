import ContaService from 'src/modules/conta/contaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CONTA_VIEW';

const contaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: contaViewActions.FIND_STARTED,
      });

      const record = await ContaService.find(id);

      dispatch({
        type: contaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contaViewActions.FIND_ERROR,
      });

      getHistory().push('/conta');
    }
  },
};

export default contaViewActions;
