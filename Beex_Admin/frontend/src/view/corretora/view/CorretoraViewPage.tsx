import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/corretora/view/corretoraViewActions';
import selectors from 'src/modules/corretora/view/corretoraViewSelectors';
import CorretoraView from 'src/view/corretora/view/CorretoraView';
import CorretoraViewToolbar from 'src/view/corretora/view/CorretoraViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CorretoraPage() {
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
          [i18n('entities.corretora.menu'), '/corretora'],
          [i18n('entities.corretora.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.corretora.view.title')}
        </PageTitle>

        <CorretoraViewToolbar match={match} />

        <CorretoraView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CorretoraPage;
