import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function RoboView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.robo.fields.nome')}
          value={record.nome}
        />

        <TextViewItem
          label={i18n('entities.robo.fields.ativo')}
          value={
            record.ativo &&
            i18n(
              `entities.robo.enumerators.ativo.${record.ativo}`,
            )
          }
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

export default RoboView;
