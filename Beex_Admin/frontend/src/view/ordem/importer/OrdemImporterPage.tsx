import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/ordem/importer/ordemImporterActions';
import fields from 'src/modules/ordem/importer/ordemImporterFields';
import selectors from 'src/modules/ordem/importer/ordemImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdemImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.ordem.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.ordem.menu'), '/ordem'],
          [i18n('entities.ordem.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ordem.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default OrdemImportPage;
