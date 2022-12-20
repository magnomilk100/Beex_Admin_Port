import ClienteService from 'src/modules/cliente/clienteService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CLIENTE_FORM';

const clienteFormActions = {
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
        type: clienteFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ClienteService.find(id);
      }

      dispatch({
        type: clienteFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clienteFormActions.INIT_ERROR,
      });

      getHistory().push('/cliente');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: clienteFormActions.CREATE_STARTED,
      });

      await ClienteService.create(values);

      dispatch({
        type: clienteFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cliente.create.success'),
      );

      getHistory().push('/cliente');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clienteFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: clienteFormActions.UPDATE_STARTED,
      });

      await ClienteService.update(id, values);

      dispatch({
        type: clienteFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cliente.update.success'),
      );

      getHistory().push('/cliente');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clienteFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default clienteFormActions;
