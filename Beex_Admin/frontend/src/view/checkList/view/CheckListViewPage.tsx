import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/checkList/view/checkListViewActions';
import selectors from 'src/modules/checkList/view/checkListViewSelectors';
import CheckListView from 'src/view/checkList/view/CheckListView';
import CheckListViewToolbar from 'src/view/checkList/view/CheckListViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CheckListPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.checkList.menu'), '/check-list'],
          [i18n('entities.checkList.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.checkList.view.title')}
        </PageTitle>

        <CheckListViewToolbar match={match} />

        <CheckListView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CheckListPage;
