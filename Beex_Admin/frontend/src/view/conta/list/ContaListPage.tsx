import React from 'react';
import { i18n } from 'src/i18n';
import ContaListFilter from 'src/view/conta/list/ContaListFilter';
import ContaListTable from 'src/view/conta/list/ContaListTable';
import ContaListToolbar from 'src/view/conta/list/ContaListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ContaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.conta.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.conta.list.title')}
        </PageTitle>

        <ContaListToolbar />
        <ContaListFilter />
        <ContaListTable />
      </ContentWrapper>
    </>
  );
}

export default ContaListPage;
