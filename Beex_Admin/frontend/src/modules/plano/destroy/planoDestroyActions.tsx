import listActions from 'src/modules/plano/list/planoListActions';
import PlanoService from 'src/modules/plano/planoService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PLANO_DESTROY';

const planoDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: planoDestroyActions.DESTROY_STARTED,
      });

      await PlanoService.destroyAll([id]);

      dispatch({
        type: planoDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.plano.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/plano');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: planoDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: planoDestroyActions.DESTROY_ALL_STARTED,
      });

      await PlanoService.destroyAll(ids);

      dispatch({
        type: planoDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.plano.destroyAll.success'),
      );

      getHistory().push('/plano');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: planoDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default planoDestroyActions;
