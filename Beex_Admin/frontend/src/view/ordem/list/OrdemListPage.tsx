import React from 'react';
import { i18n } from 'src/i18n';
import OrdemListFilter from 'src/view/ordem/list/OrdemListFilter';
import OrdemListTable from 'src/view/ordem/list/OrdemListTable';
import OrdemListToolbar from 'src/view/ordem/list/OrdemListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdemListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.ordem.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ordem.list.title')}
        </PageTitle>

        <OrdemListToolbar />
        <OrdemListFilter />
        <OrdemListTable />
      </ContentWrapper>
    </>
  );
}

export default OrdemListPage;
