import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/ordem/view/ordemViewActions';
import selectors from 'src/modules/ordem/view/ordemViewSelectors';
import OrdemView from 'src/view/ordem/view/OrdemView';
import OrdemViewToolbar from 'src/view/ordem/view/OrdemViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function OrdemPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.ordem.menu'), '/ordem'],
          [i18n('entities.ordem.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ordem.view.title')}
        </PageTitle>

        <OrdemViewToolbar match={match} />

        <OrdemView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default OrdemPage;
