import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import ContaViewItem from 'src/view/conta/view/ContaViewItem';
import RoboViewItem from 'src/view/robo/view/RoboViewItem';

function OrdemView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ContaViewItem
          label={i18n('entities.ordem.fields.conta')}
          value={record.conta}
        />

        <TextViewItem
          label={i18n('entities.ordem.fields.tipo')}
          value={
            record.tipo &&
            i18n(
              `entities.ordem.enumerators.tipo.${record.tipo}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.ordem.fields.direcao')}
          value={
            record.direcao &&
            i18n(
              `entities.ordem.enumerators.direcao.${record.direcao}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.ordem.fields.precoEntrada')}
          value={record.precoEntrada}
        />

        <RoboViewItem
          label={i18n('entities.ordem.fields.robo')}
          value={record.robo}
        />

        <TextViewItem
          label={i18n('entities.ordem.fields.versao')}
          value={record.versao}
        />

        <TextViewItem
          label={i18n(
            'entities.ordem.fields.dataHora',
          )}
          value={moment(record.dataHora).format(
            'YYYY-MM-DD HH:mm',
          )}
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

export default OrdemView;
