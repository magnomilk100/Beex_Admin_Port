import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PlanoViewItem from 'src/view/plano/view/PlanoViewItem';

function PlanoPeriodoView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PlanoViewItem
          label={i18n('entities.planoPeriodo.fields.plano')}
          value={record.plano}
        />

        <TextViewItem
          label={i18n('entities.planoPeriodo.fields.periodicidade')}
          value={
            record.periodicidade &&
            i18n(
              `entities.planoPeriodo.enumerators.periodicidade.${record.periodicidade}`,
            )
          }
        />

        <ImagesViewItem
          label={i18n('entities.planoPeriodo.fields.qrCode')}
          value={record.qrCode}
        />

        <TextViewItem
          label={i18n('entities.planoPeriodo.fields.valor')}
          value={record.valor}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default PlanoPeriodoView;
