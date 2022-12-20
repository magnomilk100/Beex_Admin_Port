import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/conta/view/contaViewActions';
import selectors from 'src/modules/conta/view/contaViewSelectors';
import ContaView from 'src/view/conta/view/ContaView';
import ContaViewToolbar from 'src/view/conta/view/ContaViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ContaPage() {
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
          [i18n('entities.conta.menu'), '/conta'],
          [i18n('entities.conta.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.conta.view.title')}
        </PageTitle>

        <ContaViewToolbar match={match} />

        <ContaView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ContaPage;
