import listActions from 'src/modules/conta/list/contaListActions';
import ContaService from 'src/modules/conta/contaService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CONTA_DESTROY';

const contaDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: contaDestroyActions.DESTROY_STARTED,
      });

      await ContaService.destroyAll([id]);

      dispatch({
        type: contaDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.conta.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/conta');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: contaDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: contaDestroyActions.DESTROY_ALL_STARTED,
      });

      await ContaService.destroyAll(ids);

      dispatch({
        type: contaDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.conta.destroyAll.success'),
      );

      getHistory().push('/conta');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: contaDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default contaDestroyActions;
