import React from 'react';
import { i18n } from 'src/i18n';
import RegistroDiarioListFilter from 'src/view/registroDiario/list/RegistroDiarioListFilter';
import RegistroDiarioListTable from 'src/view/registroDiario/list/RegistroDiarioListTable';
import RegistroDiarioListToolbar from 'src/view/registroDiario/list/RegistroDiarioListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RegistroDiarioListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.registroDiario.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.registroDiario.list.title')}
        </PageTitle>

        <RegistroDiarioListToolbar />
        <RegistroDiarioListFilter />
        <RegistroDiarioListTable />
      </ContentWrapper>
    </>
  );
}

export default RegistroDiarioListPage;
