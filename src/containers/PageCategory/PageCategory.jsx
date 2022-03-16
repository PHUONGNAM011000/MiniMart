import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import TableCategoryItem from '../../Atomic/Table/TableCategoryItem';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tableTitle: {
    marginLeft: '1rem',
  },
  titleEmty: {
    marginTop: '1rem',
    marginLeft: '5px',
  },
}));

export default function PageCategory() {
  const classes = useStyles();
  const dataCategory = useSelector((state) => state.category.dataCategory);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <p className={classes.tableTitle}>SỐ LƯỢNG : </p>
        &nbsp;
        <p>{dataCategory.length}</p>
      </div>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              STT
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Tên Sản Phẩm
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Mô tả
            </TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Hành động
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCategory.map((row) => (
            <TableCategoryItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
      {dataCategory.length === 0 && (
        <p className={classes.titleEmty}>
          Hiện không có danh mục sản phẩm nào.
        </p>
      )}
    </React.Fragment>
  );
}
