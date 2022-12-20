import RegistroDiarioService from 'src/modules/registroDiario/registroDiarioService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REGISTRODIARIO_VIEW';

const registroDiarioViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: registroDiarioViewActions.FIND_STARTED,
      });

      const record = await RegistroDiarioService.find(id);

      dispatch({
        type: registroDiarioViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: registroDiarioViewActions.FIND_ERROR,
      });

      getHistory().push('/registro-diario');
    }
  },
};

export default registroDiarioViewActions;
