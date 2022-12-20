import PlanoPeriodoService from 'src/modules/planoPeriodo/planoPeriodoService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PLANOPERIODO_FORM';

const planoPeriodoFormActions = {
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
        type: planoPeriodoFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PlanoPeriodoService.find(id);
      }

      dispatch({
        type: planoPeriodoFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoPeriodoFormActions.INIT_ERROR,
      });

      getHistory().push('/plano-periodo');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: planoPeriodoFormActions.CREATE_STARTED,
      });

      await PlanoPeriodoService.create(values);

      dispatch({
        type: planoPeriodoFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.planoPeriodo.create.success'),
      );

      getHistory().push('/plano-periodo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoPeriodoFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: planoPeriodoFormActions.UPDATE_STARTED,
      });

      await PlanoPeriodoService.update(id, values);

      dispatch({
        type: planoPeriodoFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.planoPeriodo.update.success'),
      );

      getHistory().push('/plano-periodo');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: planoPeriodoFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default planoPeriodoFormActions;
