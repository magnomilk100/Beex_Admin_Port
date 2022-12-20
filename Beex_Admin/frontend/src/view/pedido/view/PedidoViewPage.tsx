import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pedido/view/pedidoViewActions';
import selectors from 'src/modules/pedido/view/pedidoViewSelectors';
import PedidoView from 'src/view/pedido/view/PedidoView';
import PedidoViewToolbar from 'src/view/pedido/view/PedidoViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PedidoPage() {
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
          [i18n('entities.pedido.menu'), '/pedido'],
          [i18n('entities.pedido.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pedido.view.title')}
        </PageTitle>

        <PedidoViewToolbar match={match} />

        <PedidoView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PedidoPage;
