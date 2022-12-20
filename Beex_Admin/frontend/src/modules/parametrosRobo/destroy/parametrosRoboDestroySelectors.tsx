import { createSelector } from 'reselect';

const selectRaw = (state) => state.parametrosRobo.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const parametrosRoboDestroySelectors = {
  selectLoading,
};

export default parametrosRoboDestroySelectors;
