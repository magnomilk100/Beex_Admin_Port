import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/conta/importer/contaImporterActions';
import fields from 'src/modules/conta/importer/contaImporterFields';
import selectors from 'src/modules/conta/importer/contaImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ContaImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.conta.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.conta.menu'), '/conta'],
          [i18n('entities.conta.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.conta.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ContaImportPage;
