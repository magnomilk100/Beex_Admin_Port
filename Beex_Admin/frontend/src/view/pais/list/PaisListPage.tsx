import React from 'react';
import { i18n } from 'src/i18n';
import PaisListFilter from 'src/view/pais/list/PaisListFilter';
import PaisListTable from 'src/view/pais/list/PaisListTable';
import PaisListToolbar from 'src/view/pais/list/PaisListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PaisListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pais.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pais.list.title')}
        </PageTitle>

        <PaisListToolbar />
        <PaisListFilter />
        <PaisListTable />
      </ContentWrapper>
    </>
  );
}

export default PaisListPage;
