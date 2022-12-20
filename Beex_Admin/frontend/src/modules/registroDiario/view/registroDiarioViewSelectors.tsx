import { createSelector } from 'reselect';

const selectRaw = (state) => state.registroDiario.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const registroDiarioViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default registroDiarioViewSelectors;
