import listActions from 'src/modules/registroDiario/list/registroDiarioListActions';
import RegistroDiarioService from 'src/modules/registroDiario/registroDiarioService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REGISTRODIARIO_DESTROY';

const registroDiarioDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: registroDiarioDestroyActions.DESTROY_STARTED,
      });

      await RegistroDiarioService.destroyAll([id]);

      dispatch({
        type: registroDiarioDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.registroDiario.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/registro-diario');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: registroDiarioDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: registroDiarioDestroyActions.DESTROY_ALL_STARTED,
      });

      await RegistroDiarioService.destroyAll(ids);

      dispatch({
        type: registroDiarioDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.registroDiario.destroyAll.success'),
      );

      getHistory().push('/registro-diario');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: registroDiarioDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default registroDiarioDestroyActions;
