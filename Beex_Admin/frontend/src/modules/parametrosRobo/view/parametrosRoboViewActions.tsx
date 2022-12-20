import ParametrosRoboService from 'src/modules/parametrosRobo/parametrosRoboService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PARAMETROSROBO_VIEW';

const parametrosRoboViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: parametrosRoboViewActions.FIND_STARTED,
      });

      const record = await ParametrosRoboService.find(id);

      dispatch({
        type: parametrosRoboViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: parametrosRoboViewActions.FIND_ERROR,
      });

      getHistory().push('/parametros-robo');
    }
  },
};

export default parametrosRoboViewActions;
