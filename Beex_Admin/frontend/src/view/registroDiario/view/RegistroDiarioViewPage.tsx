import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/registroDiario/view/registroDiarioViewActions';
import selectors from 'src/modules/registroDiario/view/registroDiarioViewSelectors';
import RegistroDiarioView from 'src/view/registroDiario/view/RegistroDiarioView';
import RegistroDiarioViewToolbar from 'src/view/registroDiario/view/RegistroDiarioViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RegistroDiarioPage() {
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
          [i18n('entities.registroDiario.menu'), '/registro-diario'],
          [i18n('entities.registroDiario.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.registroDiario.view.title')}
        </PageTitle>

        <RegistroDiarioViewToolbar match={match} />

        <RegistroDiarioView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RegistroDiarioPage;
