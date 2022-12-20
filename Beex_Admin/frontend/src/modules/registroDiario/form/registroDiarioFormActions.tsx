import RegistroDiarioService from 'src/modules/registroDiario/registroDiarioService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REGISTRODIARIO_FORM';

const registroDiarioFormActions = {
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
        type: registroDiarioFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RegistroDiarioService.find(id);
      }

      dispatch({
        type: registroDiarioFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: registroDiarioFormActions.INIT_ERROR,
      });

      getHistory().push('/registro-diario');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: registroDiarioFormActions.CREATE_STARTED,
      });

      await RegistroDiarioService.create(values);

      dispatch({
        type: registroDiarioFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.registroDiario.create.success'),
      );

      getHistory().push('/registro-diario');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: registroDiarioFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: registroDiarioFormActions.UPDATE_STARTED,
      });

      await RegistroDiarioService.update(id, values);

      dispatch({
        type: registroDiarioFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.registroDiario.update.success'),
      );

      getHistory().push('/registro-diario');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: registroDiarioFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default registroDiarioFormActions;
