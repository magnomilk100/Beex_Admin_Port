import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pais/importer/paisImporterActions';
import fields from 'src/modules/pais/importer/paisImporterFields';
import selectors from 'src/modules/pais/importer/paisImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PaisImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.pais.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pais.menu'), '/pais'],
          [i18n('entities.pais.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pais.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PaisImportPage;
