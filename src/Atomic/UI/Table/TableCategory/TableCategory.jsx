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
          borderRadius: '10px',
          boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
          minWidth: '250px',
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
