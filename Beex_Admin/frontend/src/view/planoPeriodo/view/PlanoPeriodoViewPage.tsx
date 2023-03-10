import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/planoPeriodo/view/planoPeriodoViewActions';
import selectors from 'src/modules/planoPeriodo/view/planoPeriodoViewSelectors';
import PlanoPeriodoView from 'src/view/planoPeriodo/view/PlanoPeriodoView';
import PlanoPeriodoViewToolbar from 'src/view/planoPeriodo/view/PlanoPeriodoViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanoPeriodoPage() {
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
          [i18n('entities.planoPeriodo.menu'), '/plano-periodo'],
          [i18n('entities.planoPeriodo.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.planoPeriodo.view.title')}
        </PageTitle>

        <PlanoPeriodoViewToolbar match={match} />

        <PlanoPeriodoView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PlanoPeriodoPage;
