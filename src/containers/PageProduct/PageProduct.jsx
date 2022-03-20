import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableProductItem from '../../Atomic/UI/Table/TableProductItem';
import { useSelector } from 'react-redux';
import useSelect from '../../hooks/use-select';
import SelectSort from '../../Atomic/UI/Select/SelectSort';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',

    '& p': {
      fontWeight: 'bold',
      color: '#808080',
    },
  },
  tableTitle: {
    display: 'flex',
  },
  titleEmty: {
    marginTop: '1rem',
    marginLeft: '5px',
  },
  textTable: {
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    padding: '1rem 0 !important',
    paddingRight: '1.5rem !important',
  },
  textTableAmount: {
    fontWeight: 'bold',
    padding: '1rem 0 !important',
    textAlign: 'right',
    paddingRight: '1.5rem !important',
    fontSize: '1rem !important',
  },
  centerText: {
    fontWeight: 'bold',
    padding: '1rem 0 !important',
    textAlign: 'center',
    fontSize: '1rem !important',
  },
  boldLastTable: {
    fontWeight: 'bold',
    padding: '0 !important',
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1);',
  },
}));

export default function PageProduct() {
  const classes = useStyles();
  const dataProduct = useSelector((state) => state.product.dataProduct);
  const { data, setSortType } = useSelect(dataProduct);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectSort setSortType={setSortType} />

        <div className={classes.tableTitle}>
          <p style={{ fontWeight: '600 !important', color: '#000' }}>
            Số Lượng :{' '}
          </p>
          &nbsp;
          <p>{data.length}</p>
        </div>
      </div>

      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.textTable}>STT</TableCell>
            <TableCell className={classes.textTable}>Tên Sản Phẩm</TableCell>
            <TableCell className={classes.centerText}>Ảnh</TableCell>
            <TableCell className={classes.textTableAmount}>Số Lượng</TableCell>
            <TableCell className={classes.centerText}>Mô tả</TableCell>
            <TableCell className={classes.textTable}>Danh Mục</TableCell>
            <TableCell className={classes.textTableAmount}>
              Khối Lượng
            </TableCell>
            <TableCell className={classes.textTable}>Tình Trạng</TableCell>
            <TableCell className={classes.textTable}>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableProductItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <p className={classes.titleEmty}>Hiện không có sản phẩm nào.</p>
      )}
    </React.Fragment>
  );
}
