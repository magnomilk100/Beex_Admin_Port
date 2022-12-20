import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PaisViewItem from 'src/view/pais/view/PaisViewItem';

function ClienteView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.cliente.fields.nome')}
          value={record.nome}
        />

        <TextViewItem
          label={i18n('entities.cliente.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.cliente.fields.cpf')}
          value={record.cpf}
        />

        <TextViewItem
          label={i18n('entities.cliente.fields.telefone')}
          value={record.telefone}
        />

        <TextViewItem
          label={i18n('entities.cliente.fields.cidade')}
          value={record.cidade}
        />

        <PaisViewItem
          label={i18n('entities.cliente.fields.pais')}
          value={record.pais}
        />
        <TextViewItem
          label={i18n('entities.cliente.fields.observacoes')}
          value={record.observacoes}
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

export default ClienteView;
