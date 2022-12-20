import { createSelector } from 'reselect';

const selectRaw = (state) => state.robo.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const roboDestroySelectors = {
  selectLoading,
};

export default roboDestroySelectors;
