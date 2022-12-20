import React from 'react';
import { i18n } from 'src/i18n';
import RoboListFilter from 'src/view/robo/list/RoboListFilter';
import RoboListTable from 'src/view/robo/list/RoboListTable';
import RoboListToolbar from 'src/view/robo/list/RoboListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RoboListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.robo.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.robo.list.title')}
        </PageTitle>

        <RoboListToolbar />
        <RoboListFilter />
        <RoboListTable />
      </ContentWrapper>
    </>
  );
}

export default RoboListPage;
