import { createSelector } from 'reselect';

const selectRaw = (state) => state.cliente.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const clienteDestroySelectors = {
  selectLoading,
};

export default clienteDestroySelectors;
