import React from 'react';
import { i18n } from 'src/i18n';
import CorretoraListFilter from 'src/view/corretora/list/CorretoraListFilter';
import CorretoraListTable from 'src/view/corretora/list/CorretoraListTable';
import CorretoraListToolbar from 'src/view/corretora/list/CorretoraListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CorretoraListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.corretora.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.corretora.list.title')}
        </PageTitle>

        <CorretoraListToolbar />
        <CorretoraListFilter />
        <CorretoraListTable />
      </ContentWrapper>
    </>
  );
}

export default CorretoraListPage;
