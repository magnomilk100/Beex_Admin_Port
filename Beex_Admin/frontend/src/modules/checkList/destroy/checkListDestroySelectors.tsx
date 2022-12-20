import { createSelector } from 'reselect';

const selectRaw = (state) => state.checkList.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const checkListDestroySelectors = {
  selectLoading,
};

export default checkListDestroySelectors;
