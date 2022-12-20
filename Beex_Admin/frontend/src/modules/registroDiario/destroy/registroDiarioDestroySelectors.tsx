import { createSelector } from 'reselect';

const selectRaw = (state) => state.registroDiario.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const registroDiarioDestroySelectors = {
  selectLoading,
};

export default registroDiarioDestroySelectors;
