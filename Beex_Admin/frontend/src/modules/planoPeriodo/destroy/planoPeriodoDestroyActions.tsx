import listActions from 'src/modules/planoPeriodo/list/planoPeriodoListActions';
import PlanoPeriodoService from 'src/modules/planoPeriodo/planoPeriodoService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PLANOPERIODO_DESTROY';

const planoPeriodoDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_STARTED,
      });

      await PlanoPeriodoService.destroyAll([id]);

      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.planoPeriodo.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/plano-periodo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_ALL_STARTED,
      });

      await PlanoPeriodoService.destroyAll(ids);

      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.planoPeriodo.destroyAll.success'),
      );

      getHistory().push('/plano-periodo');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: planoPeriodoDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default planoPeriodoDestroyActions;
