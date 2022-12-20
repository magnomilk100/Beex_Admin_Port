import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/robo/importer/roboImporterActions';
import fields from 'src/modules/robo/importer/roboImporterFields';
import selectors from 'src/modules/robo/importer/roboImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RoboImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.robo.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.robo.menu'), '/robo'],
          [i18n('entities.robo.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.robo.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RoboImportPage;
