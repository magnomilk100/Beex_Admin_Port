import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/parametrosRobo/importer/parametrosRoboImporterActions';
import fields from 'src/modules/parametrosRobo/importer/parametrosRoboImporterFields';
import selectors from 'src/modules/parametrosRobo/importer/parametrosRoboImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ParametrosRoboImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.parametrosRobo.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.parametrosRobo.menu'), '/parametros-robo'],
          [i18n('entities.parametrosRobo.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.parametrosRobo.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ParametrosRoboImportPage;
