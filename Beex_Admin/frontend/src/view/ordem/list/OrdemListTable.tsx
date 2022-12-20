import { Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import ordemSelectors from 'src/modules/ordem/ordemSelectors';
import destroyActions from 'src/modules/ordem/destroy/ordemDestroyActions';
import destroySelectors from 'src/modules/ordem/destroy/ordemDestroySelectors';
import actions from 'src/modules/ordem/list/ordemListActions';
import selectors from 'src/modules/ordem/list/ordemListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';
import moment from 'moment';
import ContaListItem from 'src/view/conta/list/ContaListItem';
import RoboListItem from 'src/view/robo/list/RoboListItem';

function OrdemListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    ordemSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    ordemSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <Box
        style={{
          display: 'block',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table
          style={{
            borderRadius: '5px',
            border: '1px solid rgb(224, 224, 224)',
            borderCollapse: 'initial',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCellCustom padding="checkbox">
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </TableCellCustom>
              <TableCellCustom
                label={i18n(
                  'entities.ordem.fields.conta',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'tipo'}
                label={i18n(
                  'entities.ordem.fields.tipo',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'direcao'}
                label={i18n(
                  'entities.ordem.fields.direcao',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'precoEntrada'}
                label={i18n(
                  'entities.ordem.fields.precoEntrada',
                )}
                align="right"
              />
              <TableCellCustom
                label={i18n(
                  'entities.ordem.fields.robo',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'versao'}
                label={i18n(
                  'entities.ordem.fields.versao',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'dataHora'}
                label={i18n(
                  'entities.ordem.fields.dataHora',
                )}
              />              
              <TableCellCustom size="md" />
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Spinner />
                </TableCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <TableCell colSpan={100}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {i18n('table.noData')}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                      size="small"
                    />
                  </TableCell>
                <TableCell>
                  <ContaListItem value={row.conta} />
                </TableCell>
                <TableCell>
                  {row.tipo
                    ? i18n(
                        `entities.ordem.enumerators.tipo.${row.tipo}`,
                      )
                    : null}
                </TableCell>
                <TableCell>
                  {row.direcao
                    ? i18n(
                        `entities.ordem.enumerators.direcao.${row.direcao}`,
                      )
                    : null}
                </TableCell>
                <TableCell align="right">{row.precoEntrada}</TableCell>
                <TableCell>
                  <RoboListItem value={row.robo} />
                </TableCell>
                <TableCell>{row.versao}</TableCell>
                <TableCell>
                  {row.dataHora
                    ? moment(row.dataHora).format(
                        'YYYY-MM-DD HH:mm',
                      )
                    : null}
                </TableCell>                  
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          component={Link}
                          color="primary"
                          to={`/ordem/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip
                          title={i18n('common.edit')}
                        >
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/ordem/${row.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip
                          title={i18n('common.destroy')}
                        >
                          <IconButton
                            color="primary"
                            onClick={() =>
                              doOpenDestroyConfirmModal(
                                row.id,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <Pagination
        onChange={doChangePagination}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default OrdemListTable;
