import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableProductItem from '../../Atomic/Table/TableProductItem';
import { useSelector } from 'react-redux';

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
  boldTable: {
    fontWeight: 'bold',
    padding: '0 !important',
    // paddingRight: '1.5rem !important',
    textAlign: 'center',
  },
  boldLastTable: {
    fontWeight: 'bold',
    padding: '0 !important',
  },
}));

export default function PageProduct() {
  const classes = useStyles();
  const dataProduct = useSelector((state) => state.product.dataProduct);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        priceIncrease: 'amount',
        nameIncrease: 'name',
        priceDecrease: 'amount',
        nameDecrease: 'name',
      };
      const sortProperty = types[type];
      const sorted =
        sortProperty === 'name'
          ? type === 'nameDecrease'
            ? [...dataProduct]
                .sort((a, b) =>
                  a[sortProperty] > b[sortProperty]
                    ? 1
                    : b[sortProperty] > a[sortProperty]
                    ? -1
                    : 0
                )
                .reverse()
            : [...dataProduct].sort((a, b) =>
                a[sortProperty] > b[sortProperty]
                  ? 1
                  : b[sortProperty] > a[sortProperty]
                  ? -1
                  : 0
              )
          : type === 'priceDecrease'
          ? [...dataProduct].sort((a, b) => b[sortProperty] - a[sortProperty])
          : [...dataProduct]
              .sort((a, b) => b[sortProperty] - a[sortProperty])
              .reverse();

      setData(sorted);
    };

    sortArray(sortType); // eslint-disable-next-line
  }, [sortType, dataProduct]);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <div className="select">
          <p>Sắp xếp theo:&nbsp;</p>
          <select
            defaultValue="Thứ Tự"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option disabled>Thứ Tự</option>
            <option value="priceIncrease">Số lượng tăng dần</option>
            <option value="priceDecrease">Số lượng giảm dần</option>
            <option value="nameIncrease">Tên A-Z</option>
            <option value="nameDecrease">Tên Z-A</option>
          </select>
        </div>
        <div className={classes.tableTitle}>
          <p>SỐ LƯỢNG : </p>
          &nbsp;
          <p>{data.length}</p>
        </div>
      </div>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.boldTable}>STT</TableCell>
            <TableCell className={classes.boldTable}>Tên Sản Phẩm</TableCell>
            <TableCell className={classes.boldTable}>Ảnh</TableCell>
            <TableCell className={classes.boldTable}>Số Lượng</TableCell>
            <TableCell className={classes.boldTable}>Mô tả</TableCell>
            <TableCell className={classes.boldTable}>Danh Mục</TableCell>
            <TableCell className={classes.boldTable}>Khối Lượng</TableCell>
            <TableCell className={classes.boldTable}>Tình Trạng</TableCell>
            <TableCell className={classes.boldLastTable}>Hành động</TableCell>
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
