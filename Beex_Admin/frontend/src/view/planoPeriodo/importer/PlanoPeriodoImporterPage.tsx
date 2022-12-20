import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/planoPeriodo/importer/planoPeriodoImporterActions';
import fields from 'src/modules/planoPeriodo/importer/planoPeriodoImporterFields';
import selectors from 'src/modules/planoPeriodo/importer/planoPeriodoImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanoPeriodoImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.planoPeriodo.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.planoPeriodo.menu'), '/plano-periodo'],
          [i18n('entities.planoPeriodo.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.planoPeriodo.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PlanoPeriodoImportPage;
