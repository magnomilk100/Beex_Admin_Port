import CheckListService from 'src/modules/checkList/checkListService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHECKLIST_VIEW';

const checkListViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: checkListViewActions.FIND_STARTED,
      });

      const record = await CheckListService.find(id);

      dispatch({
        type: checkListViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: checkListViewActions.FIND_ERROR,
      });

      getHistory().push('/check-list');
    }
  },
};

export default checkListViewActions;
