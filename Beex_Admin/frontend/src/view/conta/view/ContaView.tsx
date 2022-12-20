import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ClienteViewItem from 'src/view/cliente/view/ClienteViewItem';
import CorretoraViewItem from 'src/view/corretora/view/CorretoraViewItem';

function ContaView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ClienteViewItem
          label={i18n('entities.conta.fields.cliente')}
          value={record.cliente}
        />

        <CorretoraViewItem
          label={i18n('entities.conta.fields.corretora')}
          value={record.corretora}
        />

        <TextViewItem
          label={i18n('entities.conta.fields.idMetatraderCorretora')}
          value={record.idMetatraderCorretora}
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

export default ContaView;
