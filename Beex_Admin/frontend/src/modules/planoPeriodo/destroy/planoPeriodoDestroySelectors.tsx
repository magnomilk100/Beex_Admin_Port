import { createSelector } from 'reselect';

const selectRaw = (state) => state.planoPeriodo.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const planoPeriodoDestroySelectors = {
  selectLoading,
};

export default planoPeriodoDestroySelectors;
