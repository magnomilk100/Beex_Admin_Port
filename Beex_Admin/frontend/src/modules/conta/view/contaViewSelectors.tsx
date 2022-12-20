import { createSelector } from 'reselect';

const selectRaw = (state) => state.conta.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const contaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default contaViewSelectors;
