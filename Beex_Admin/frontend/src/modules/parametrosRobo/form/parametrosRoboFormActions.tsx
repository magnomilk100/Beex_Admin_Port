import ParametrosRoboService from 'src/modules/parametrosRobo/parametrosRoboService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PARAMETROSROBO_FORM';

const parametrosRoboFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: parametrosRoboFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ParametrosRoboService.find(id);
      }

      dispatch({
        type: parametrosRoboFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: parametrosRoboFormActions.INIT_ERROR,
      });

      getHistory().push('/parametros-robo');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: parametrosRoboFormActions.CREATE_STARTED,
      });

      await ParametrosRoboService.create(values);

      dispatch({
        type: parametrosRoboFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.parametrosRobo.create.success'),
      );

      getHistory().push('/parametros-robo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: parametrosRoboFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: parametrosRoboFormActions.UPDATE_STARTED,
      });

      await ParametrosRoboService.update(id, values);

      dispatch({
        type: parametrosRoboFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.parametrosRobo.update.success'),
      );

      getHistory().push('/parametros-robo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: parametrosRoboFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default parametrosRoboFormActions;
