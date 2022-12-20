import { createSelector } from 'reselect';

const selectRaw = (state) => state.plano.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const planoDestroySelectors = {
  selectLoading,
};

export default planoDestroySelectors;
