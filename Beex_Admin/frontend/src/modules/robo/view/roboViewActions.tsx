import RoboService from 'src/modules/robo/roboService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ROBO_VIEW';

const roboViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: roboViewActions.FIND_STARTED,
      });

      const record = await RoboService.find(id);

      dispatch({
        type: roboViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: roboViewActions.FIND_ERROR,
      });

      getHistory().push('/robo');
    }
  },
};

export default roboViewActions;
