import listActions from 'src/modules/pedido/list/pedidoListActions';
import PedidoService from 'src/modules/pedido/pedidoService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PEDIDO_DESTROY';

const pedidoDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: pedidoDestroyActions.DESTROY_STARTED,
      });

      await PedidoService.destroyAll([id]);

      dispatch({
        type: pedidoDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.pedido.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/pedido');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: pedidoDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: pedidoDestroyActions.DESTROY_ALL_STARTED,
      });

      await PedidoService.destroyAll(ids);

      dispatch({
        type: pedidoDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.pedido.destroyAll.success'),
      );

      getHistory().push('/pedido');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: pedidoDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default pedidoDestroyActions;
