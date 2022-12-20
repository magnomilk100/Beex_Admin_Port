import { createSelector } from 'reselect';

const selectRaw = (state) => state.conta.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const contaDestroySelectors = {
  selectLoading,
};

export default contaDestroySelectors;
