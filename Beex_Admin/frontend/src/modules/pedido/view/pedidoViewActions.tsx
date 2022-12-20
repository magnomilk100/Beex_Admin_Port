import PedidoService from 'src/modules/pedido/pedidoService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PEDIDO_VIEW';

const pedidoViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: pedidoViewActions.FIND_STARTED,
      });

      const record = await PedidoService.find(id);

      dispatch({
        type: pedidoViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: pedidoViewActions.FIND_ERROR,
      });

      getHistory().push('/pedido');
    }
  },
};

export default pedidoViewActions;
