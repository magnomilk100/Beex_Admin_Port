import { createSelector } from 'reselect';

const selectRaw = (state) => state.ordem.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ordemViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default ordemViewSelectors;
