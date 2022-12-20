import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/parametrosRobo/view/parametrosRoboViewActions';
import selectors from 'src/modules/parametrosRobo/view/parametrosRoboViewSelectors';
import ParametrosRoboView from 'src/view/parametrosRobo/view/ParametrosRoboView';
import ParametrosRoboViewToolbar from 'src/view/parametrosRobo/view/ParametrosRoboViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ParametrosRoboPage() {
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
          [i18n('entities.parametrosRobo.menu'), '/parametros-robo'],
          [i18n('entities.parametrosRobo.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.parametrosRobo.view.title')}
        </PageTitle>

        <ParametrosRoboViewToolbar match={match} />

        <ParametrosRoboView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ParametrosRoboPage;
