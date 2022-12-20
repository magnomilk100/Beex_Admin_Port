import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/plano/importer/planoImporterActions';
import fields from 'src/modules/plano/importer/planoImporterFields';
import selectors from 'src/modules/plano/importer/planoImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanoImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.plano.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.plano.menu'), '/plano'],
          [i18n('entities.plano.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.plano.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PlanoImportPage;
