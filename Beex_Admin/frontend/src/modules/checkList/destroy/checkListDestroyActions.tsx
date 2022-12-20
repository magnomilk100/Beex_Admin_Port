import listActions from 'src/modules/checkList/list/checkListListActions';
import CheckListService from 'src/modules/checkList/checkListService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHECKLIST_DESTROY';

const checkListDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: checkListDestroyActions.DESTROY_STARTED,
      });

      await CheckListService.destroyAll([id]);

      dispatch({
        type: checkListDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.checkList.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/check-list');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: checkListDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: checkListDestroyActions.DESTROY_ALL_STARTED,
      });

      await CheckListService.destroyAll(ids);

      dispatch({
        type: checkListDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.checkList.destroyAll.success'),
      );

      getHistory().push('/check-list');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: checkListDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default checkListDestroyActions;
