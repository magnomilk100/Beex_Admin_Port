import React from 'react';
import { i18n } from 'src/i18n';
import PlanoPeriodoListFilter from 'src/view/planoPeriodo/list/PlanoPeriodoListFilter';
import PlanoPeriodoListTable from 'src/view/planoPeriodo/list/PlanoPeriodoListTable';
import PlanoPeriodoListToolbar from 'src/view/planoPeriodo/list/PlanoPeriodoListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanoPeriodoListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.planoPeriodo.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.planoPeriodo.list.title')}
        </PageTitle>

        <PlanoPeriodoListToolbar />
        <PlanoPeriodoListFilter />
        <PlanoPeriodoListTable />
      </ContentWrapper>
    </>
  );
}

export default PlanoPeriodoListPage;
