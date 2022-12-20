import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cliente/view/clienteViewActions';
import selectors from 'src/modules/cliente/view/clienteViewSelectors';
import ClienteView from 'src/view/cliente/view/ClienteView';
import ClienteViewToolbar from 'src/view/cliente/view/ClienteViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ClientePage() {
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
          [i18n('entities.cliente.menu'), '/cliente'],
          [i18n('entities.cliente.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cliente.view.title')}
        </PageTitle>

        <ClienteViewToolbar match={match} />

        <ClienteView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ClientePage;
