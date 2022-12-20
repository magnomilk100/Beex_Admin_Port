import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/corretora/importer/corretoraImporterActions';
import fields from 'src/modules/corretora/importer/corretoraImporterFields';
import selectors from 'src/modules/corretora/importer/corretoraImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CorretoraImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.corretora.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.corretora.menu'), '/corretora'],
          [i18n('entities.corretora.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.corretora.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CorretoraImportPage;
