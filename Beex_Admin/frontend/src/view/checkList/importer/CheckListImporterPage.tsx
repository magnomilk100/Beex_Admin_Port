import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/checkList/importer/checkListImporterActions';
import fields from 'src/modules/checkList/importer/checkListImporterFields';
import selectors from 'src/modules/checkList/importer/checkListImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CheckListImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.checkList.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.checkList.menu'), '/check-list'],
          [i18n('entities.checkList.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.checkList.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CheckListImportPage;
