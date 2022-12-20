import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function PaisView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.pais.fields.nome')}
          value={record.nome}
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

export default PaisView;
