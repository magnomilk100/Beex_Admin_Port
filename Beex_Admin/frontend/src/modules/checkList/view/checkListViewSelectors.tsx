import { createSelector } from 'reselect';

const selectRaw = (state) => state.checkList.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const checkListViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default checkListViewSelectors;
