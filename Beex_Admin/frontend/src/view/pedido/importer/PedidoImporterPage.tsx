import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/pedido/importer/pedidoImporterActions';
import fields from 'src/modules/pedido/importer/pedidoImporterFields';
import selectors from 'src/modules/pedido/importer/pedidoImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PedidoImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.pedido.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pedido.menu'), '/pedido'],
          [i18n('entities.pedido.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.pedido.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PedidoImportPage;
