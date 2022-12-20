import listActions from 'src/modules/corretora/list/corretoraListActions';
import CorretoraService from 'src/modules/corretora/corretoraService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CORRETORA_DESTROY';

const corretoraDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: corretoraDestroyActions.DESTROY_STARTED,
      });

      await CorretoraService.destroyAll([id]);

      dispatch({
        type: corretoraDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.corretora.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/corretora');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: corretoraDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: corretoraDestroyActions.DESTROY_ALL_STARTED,
      });

      await CorretoraService.destroyAll(ids);

      dispatch({
        type: corretoraDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.corretora.destroyAll.success'),
      );

      getHistory().push('/corretora');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: corretoraDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default corretoraDestroyActions;
