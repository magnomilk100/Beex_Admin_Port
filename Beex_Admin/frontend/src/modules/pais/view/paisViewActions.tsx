import PaisService from 'src/modules/pais/paisService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PAIS_VIEW';

const paisViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: paisViewActions.FIND_STARTED,
      });

      const record = await PaisService.find(id);

      dispatch({
        type: paisViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: paisViewActions.FIND_ERROR,
      });

      getHistory().push('/pais');
    }
  },
};

export default paisViewActions;
