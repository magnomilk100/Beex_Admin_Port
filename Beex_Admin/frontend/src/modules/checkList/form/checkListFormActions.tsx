import CheckListService from 'src/modules/checkList/checkListService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CHECKLIST_FORM';

const checkListFormActions = {
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
        type: checkListFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CheckListService.find(id);
      }

      dispatch({
        type: checkListFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: checkListFormActions.INIT_ERROR,
      });

      getHistory().push('/check-list');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: checkListFormActions.CREATE_STARTED,
      });

      await CheckListService.create(values);

      dispatch({
        type: checkListFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.checkList.create.success'),
      );

      getHistory().push('/check-list');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: checkListFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: checkListFormActions.UPDATE_STARTED,
      });

      await CheckListService.update(id, values);

      dispatch({
        type: checkListFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.checkList.update.success'),
      );

      getHistory().push('/check-list');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: checkListFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default checkListFormActions;
