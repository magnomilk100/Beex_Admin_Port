import React from 'react';
import { i18n } from 'src/i18n';
import PedidoListFilter from 'src/view/pedido/list/PedidoListFilter';
import PedidoListTable from 'src/view/pedido/list/PedidoListTable';
import PedidoListToolbar from 'src/view/pedido/list/PedidoListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PedidoListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pedido.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pedido.list.title')}
        </PageTitle>

        <PedidoListToolbar />
        <PedidoListFilter />
        <PedidoListTable />
      </ContentWrapper>
    </>
  );
}

export default PedidoListPage;
