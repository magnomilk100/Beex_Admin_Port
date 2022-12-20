import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import RoboViewItem from 'src/view/robo/view/RoboViewItem';

function ParametrosRoboView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n(
            'entities.parametrosRobo.fields.data',
          )}
          value={moment(record.data).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <RoboViewItem
          label={i18n('entities.parametrosRobo.fields.robo')}
          value={record.robo}
        />

        <TextViewItem
          label={i18n('entities.parametrosRobo.fields.versao')}
          value={record.versao}
        />

        <TextViewItem
          label={i18n('entities.parametrosRobo.fields.configuracao')}
          value={
            record.configuracao &&
            i18n(
              `entities.parametrosRobo.enumerators.configuracao.${record.configuracao}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.parametrosRobo.fields.observacao')}
          value={record.observacao}
        />

        <TextViewItem
          label={i18n('entities.parametrosRobo.fields.parametros')}
          value={record.parametros}
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

export default ParametrosRoboView;
