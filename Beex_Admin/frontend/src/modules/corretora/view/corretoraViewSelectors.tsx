import { createSelector } from 'reselect';

const selectRaw = (state) => state.corretora.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const corretoraViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default corretoraViewSelectors;
