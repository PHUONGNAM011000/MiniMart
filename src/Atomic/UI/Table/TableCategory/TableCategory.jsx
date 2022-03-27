import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
// import Paper from '@material-ui/core/Paper';
import TableHeadCategory from './TableHeadCategory/TableHeadCategory';
import TableBodyCategory from './TableBodyCategory/TableBodyCategory';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableCategory = ({ dataTable }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer
        style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow:
            'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
        }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHeadCategory />
          <TableBodyCategory dataTable={dataTable} />
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCategory;
