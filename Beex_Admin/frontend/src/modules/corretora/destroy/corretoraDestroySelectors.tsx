import { createSelector } from 'reselect';

const selectRaw = (state) => state.corretora.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const corretoraDestroySelectors = {
  selectLoading,
};

export default corretoraDestroySelectors;
