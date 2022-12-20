import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ClienteViewItem from 'src/view/cliente/view/ClienteViewItem';
import RoboViewItem from 'src/view/robo/view/RoboViewItem';
import PlanoViewItem from 'src/view/plano/view/PlanoViewItem';

function PedidoView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ClienteViewItem
          label={i18n('entities.pedido.fields.cliente')}
          value={record.cliente}
        />

        <RoboViewItem
          label={i18n('entities.pedido.fields.robo')}
          value={record.robo}
        />

        <PlanoViewItem
          label={i18n('entities.pedido.fields.plano')}
          value={record.plano}
        />

        <UserViewItem
          label={i18n('entities.pedido.fields.indicadoPor')}
          value={record.indicadoPor}
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.dataInicio')}
          value={record.dataInicio}
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.dataTermino')}
          value={record.dataTermino}
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.dataEmailCobranca')}
          value={record.dataEmailCobranca}
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.valorPago')}
          value={record.valorPago}
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.plataformaDePagamento')}
          value={
            record.plataformaDePagamento &&
            i18n(
              `entities.pedido.enumerators.plataformaDePagamento.${record.plataformaDePagamento}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.pedido.fields.duracaoPlano')}
          value={
            record.duracaoPlano &&
            i18n(
              `entities.pedido.enumerators.duracaoPlano.${record.duracaoPlano}`,
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

export default PedidoView;
