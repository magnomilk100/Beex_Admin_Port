import listActions from 'src/modules/ordem/list/ordemListActions';
import OrdemService from 'src/modules/ordem/ordemService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ORDEM_DESTROY';

const ordemDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ordemDestroyActions.DESTROY_STARTED,
      });

      await OrdemService.destroyAll([id]);

      dispatch({
        type: ordemDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.ordem.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/ordem');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ordemDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: ordemDestroyActions.DESTROY_ALL_STARTED,
      });

      await OrdemService.destroyAll(ids);

      dispatch({
        type: ordemDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.ordem.destroyAll.success'),
      );

      getHistory().push('/ordem');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ordemDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default ordemDestroyActions;
