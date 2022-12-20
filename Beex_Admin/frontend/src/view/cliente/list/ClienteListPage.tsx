import React from 'react';
import { i18n } from 'src/i18n';
import ClienteListFilter from 'src/view/cliente/list/ClienteListFilter';
import ClienteListTable from 'src/view/cliente/list/ClienteListTable';
import ClienteListToolbar from 'src/view/cliente/list/ClienteListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ClienteListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cliente.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cliente.list.title')}
        </PageTitle>

        <ClienteListToolbar />
        <ClienteListFilter />
        <ClienteListTable />
      </ContentWrapper>
    </>
  );
}

export default ClienteListPage;
