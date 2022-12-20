import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cliente/importer/clienteImporterActions';
import fields from 'src/modules/cliente/importer/clienteImporterFields';
import selectors from 'src/modules/cliente/importer/clienteImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ClienteImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cliente.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cliente.menu'), '/cliente'],
          [i18n('entities.cliente.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cliente.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ClienteImportPage;
