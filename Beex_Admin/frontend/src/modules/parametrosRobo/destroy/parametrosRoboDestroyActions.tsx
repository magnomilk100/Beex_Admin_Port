import listActions from 'src/modules/parametrosRobo/list/parametrosRoboListActions';
import ParametrosRoboService from 'src/modules/parametrosRobo/parametrosRoboService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PARAMETROSROBO_DESTROY';

const parametrosRoboDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_STARTED,
      });

      await ParametrosRoboService.destroyAll([id]);

      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.parametrosRobo.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/parametros-robo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_ALL_STARTED,
      });

      await ParametrosRoboService.destroyAll(ids);

      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.parametrosRobo.destroyAll.success'),
      );

      getHistory().push('/parametros-robo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: parametrosRoboDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default parametrosRoboDestroyActions;
