import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ClienteViewItem from 'src/view/cliente/view/ClienteViewItem';
import RoboViewItem from 'src/view/robo/view/RoboViewItem';
import ContaViewItem from 'src/view/conta/view/ContaViewItem';

function RegistroDiarioView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ClienteViewItem
          label={i18n('entities.registroDiario.fields.cliente')}
          value={record.cliente}
        />

        <RoboViewItem
          label={i18n('entities.registroDiario.fields.robo')}
          value={record.robo}
        />

        <TextViewItem
          label={i18n('entities.registroDiario.fields.versao')}
          value={record.versao}
        />

        <TextViewItem
          label={i18n('entities.registroDiario.fields.numeroMagico')}
          value={record.numeroMagico}
        />

        <TextViewItem
          label={i18n('entities.registroDiario.fields.qtdContratos')}
          value={record.qtdContratos}
        />

        <TextViewItem
          label={i18n('entities.registroDiario.fields.data')}
          value={record.data}
        />

        <TextViewItem
          label={i18n('entities.registroDiario.fields.numeroChart')}
          value={record.numeroChart}
        />

        <ContaViewItem
          label={i18n('entities.registroDiario.fields.conta')}
          value={record.conta}
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

export default RegistroDiarioView;
