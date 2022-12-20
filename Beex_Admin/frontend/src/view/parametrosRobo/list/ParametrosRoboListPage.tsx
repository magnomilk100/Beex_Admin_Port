import React from 'react';
import { i18n } from 'src/i18n';
import ParametrosRoboListFilter from 'src/view/parametrosRobo/list/ParametrosRoboListFilter';
import ParametrosRoboListTable from 'src/view/parametrosRobo/list/ParametrosRoboListTable';
import ParametrosRoboListToolbar from 'src/view/parametrosRobo/list/ParametrosRoboListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ParametrosRoboListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.parametrosRobo.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.parametrosRobo.list.title')}
        </PageTitle>

        <ParametrosRoboListToolbar />
        <ParametrosRoboListFilter />
        <ParametrosRoboListTable />
      </ContentWrapper>
    </>
  );
}

export default ParametrosRoboListPage;
