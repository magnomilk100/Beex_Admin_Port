import { createSelector } from 'reselect';

const selectRaw = (state) => state.pedido.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const pedidoViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default pedidoViewSelectors;
