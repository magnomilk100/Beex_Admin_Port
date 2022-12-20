import listActions from 'src/modules/robo/list/roboListActions';
import RoboService from 'src/modules/robo/roboService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ROBO_DESTROY';

const roboDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: roboDestroyActions.DESTROY_STARTED,
      });

      await RoboService.destroyAll([id]);

      dispatch({
        type: roboDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.robo.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/robo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: roboDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: roboDestroyActions.DESTROY_ALL_STARTED,
      });

      await RoboService.destroyAll(ids);

      dispatch({
        type: roboDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.robo.destroyAll.success'),
      );

      getHistory().push('/robo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: roboDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default roboDestroyActions;
