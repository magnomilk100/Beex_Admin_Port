import { createSelector } from 'reselect';

const selectRaw = (state) => state.plano.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const planoViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default planoViewSelectors;
