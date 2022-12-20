import ContaService from 'src/modules/conta/contaService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CONTA_FORM';

const contaFormActions = {
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
        type: contaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ContaService.find(id);
      }

      dispatch({
        type: contaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contaFormActions.INIT_ERROR,
      });

      getHistory().push('/conta');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: contaFormActions.CREATE_STARTED,
      });

      await ContaService.create(values);

      dispatch({
        type: contaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.conta.create.success'),
      );

      getHistory().push('/conta');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: contaFormActions.UPDATE_STARTED,
      });

      await ContaService.update(id, values);

      dispatch({
        type: contaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.conta.update.success'),
      );

      getHistory().push('/conta');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default contaFormActions;
