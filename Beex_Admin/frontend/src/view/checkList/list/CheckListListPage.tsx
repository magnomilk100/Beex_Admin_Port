import React from 'react';
import { i18n } from 'src/i18n';
import CheckListListFilter from 'src/view/checkList/list/CheckListListFilter';
import CheckListListTable from 'src/view/checkList/list/CheckListListTable';
import CheckListListToolbar from 'src/view/checkList/list/CheckListListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CheckListListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.checkList.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.checkList.list.title')}
        </PageTitle>

        <CheckListListToolbar />
        <CheckListListFilter />
        <CheckListListTable />
      </ContentWrapper>
    </>
  );
}

export default CheckListListPage;
