import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableProductHead from './TableProductHead/TableProductHead';
import TableProductBody from './TableProductBody/TableProductBody';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableProduct({ dataTable }) {
  const classes = useStyles();

  return (
    <TableContainer
      style={{
        background: '#fff',
        borderRadius: '1rem',
        boxShadow:
          'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
      }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableProductHead />
        <TableProductBody dataTable={dataTable} />
      </Table>
    </TableContainer>
  );
}
