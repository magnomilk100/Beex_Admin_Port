import { createSelector } from 'reselect';

const selectRaw = (state) => state.planoPeriodo.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const planoPeriodoViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default planoPeriodoViewSelectors;
