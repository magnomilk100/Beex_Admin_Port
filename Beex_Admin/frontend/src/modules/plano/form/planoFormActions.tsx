import PlanoService from 'src/modules/plano/planoService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PLANO_FORM';

const planoFormActions = {
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
        type: planoFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlanoService.find(id);
      }

      dispatch({
        type: planoFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoFormActions.INIT_ERROR,
      });

      getHistory().push('/plano');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: planoFormActions.CREATE_STARTED,
      });

      await PlanoService.create(values);

      dispatch({
        type: planoFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.plano.create.success'),
      );

      getHistory().push('/plano');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: planoFormActions.UPDATE_STARTED,
      });

      await PlanoService.update(id, values);

      dispatch({
        type: planoFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.plano.update.success'),
      );

      getHistory().push('/plano');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default planoFormActions;
