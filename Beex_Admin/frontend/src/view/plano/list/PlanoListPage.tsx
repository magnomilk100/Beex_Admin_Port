import React from 'react';
import { i18n } from 'src/i18n';
import PlanoListFilter from 'src/view/plano/list/PlanoListFilter';
import PlanoListTable from 'src/view/plano/list/PlanoListTable';
import PlanoListToolbar from 'src/view/plano/list/PlanoListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanoListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plano.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plano.list.title')}
        </PageTitle>

        <PlanoListToolbar />
        <PlanoListFilter />
        <PlanoListTable />
      </ContentWrapper>
    </>
  );
}

export default PlanoListPage;
