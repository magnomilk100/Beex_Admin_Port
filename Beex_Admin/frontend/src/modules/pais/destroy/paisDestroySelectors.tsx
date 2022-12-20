import { createSelector } from 'reselect';

const selectRaw = (state) => state.pais.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const paisDestroySelectors = {
  selectLoading,
};

export default paisDestroySelectors;
