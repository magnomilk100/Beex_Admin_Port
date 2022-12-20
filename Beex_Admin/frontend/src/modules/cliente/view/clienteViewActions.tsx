import ClienteService from 'src/modules/cliente/clienteService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CLIENTE_VIEW';

const clienteViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: clienteViewActions.FIND_STARTED,
      });

      const record = await ClienteService.find(id);

      dispatch({
        type: clienteViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clienteViewActions.FIND_ERROR,
      });

      getHistory().push('/cliente');
    }
  },
};

export default clienteViewActions;
