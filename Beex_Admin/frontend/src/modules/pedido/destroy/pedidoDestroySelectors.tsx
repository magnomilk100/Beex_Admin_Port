import { createSelector } from 'reselect';

const selectRaw = (state) => state.pedido.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const pedidoDestroySelectors = {
  selectLoading,
};

export default pedidoDestroySelectors;
