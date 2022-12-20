import { createSelector } from 'reselect';

const selectRaw = (state) => state.pais.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const paisViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default paisViewSelectors;
