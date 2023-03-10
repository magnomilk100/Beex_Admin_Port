import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/registroDiario/importer/registroDiarioImporterActions';
import fields from 'src/modules/registroDiario/importer/registroDiarioImporterFields';
import selectors from 'src/modules/registroDiario/importer/registroDiarioImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RegistroDiarioImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.registroDiario.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.registroDiario.menu'), '/registro-diario'],
          [i18n('entities.registroDiario.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.registroDiario.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RegistroDiarioImportPage;
