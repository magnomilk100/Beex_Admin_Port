import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/planoPeriodo/planoPeriodoSelectors';

function PlanoPeriodoListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <MaterialLink
            component={Link}
            to={`/plano-periodo/${record.id}`}
          >
            {record.periodicidade}
          </MaterialLink>
        </div>
      );
    }

    return <div key={record.id}>{record.periodicidade}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

PlanoPeriodoListItem.propTypes = {
  value: PropTypes.any,
};

export default PlanoPeriodoListItem;
