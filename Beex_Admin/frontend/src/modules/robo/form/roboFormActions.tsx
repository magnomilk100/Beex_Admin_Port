import RoboService from 'src/modules/robo/roboService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ROBO_FORM';

const roboFormActions = {
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
        type: roboFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RoboService.find(id);
      }

      dispatch({
        type: roboFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: roboFormActions.INIT_ERROR,
      });

      getHistory().push('/robo');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: roboFormActions.CREATE_STARTED,
      });

      await RoboService.create(values);

      dispatch({
        type: roboFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.robo.create.success'),
      );

      getHistory().push('/robo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: roboFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: roboFormActions.UPDATE_STARTED,
      });

      await RoboService.update(id, values);

      dispatch({
        type: roboFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.robo.update.success'),
      );

      getHistory().push('/robo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: roboFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default roboFormActions;
