import { createSelector } from 'reselect';

const selectRaw = (state) => state.robo.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const roboViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default roboViewSelectors;
