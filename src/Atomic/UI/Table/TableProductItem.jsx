import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../../store/modalProductSlicde';
import { ActionsProduct } from '../../../store/productSlice';

const useStyles = makeStyles((theme) => ({
  imgSize: {
    width: '100px',
    height: '100px',
  },
  buttonTable: {
    marginRight: '1rem',

    '@media screen and (max-width: 1075px)': {
      marginBottom: '0.5rem',
      marginRight: '0',
    },
  },
}));

const TableProductItem = ({ row }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const showModalProduct = (item) => {
    dispatch(ActionsModalProduct.showModalProduct(item));
  };

  const removeProductHandler = (id) => {
    dispatch(ActionsProduct.removeProduct(id));
  };

  const editProductHandler = (item) => {
    dispatch(ActionsModalProduct.editModalProduct(item));
  };

  return (
    <TableRow>
      <TableCell style={{ paddingRight: '0' }}>{row.stt}</TableCell>
      <TableCell style={{ paddingRight: '0' }}>{row.name}</TableCell>
      <TableCell style={{ paddingRight: '0' }}>
        <Avatar variant="square" src={row.image} className={classes.imgSize} />
      </TableCell>
      <TableCell
        style={{
          textAlign: 'right',
          paddingRight: '0',
        }}
      >
        <div style={{ marginRight: '1.5rem' }}>{row.amount}</div>
      </TableCell>
      <TableCell style={{ paddingRight: '0' }}>{row.description}</TableCell>
      <TableCell style={{ paddingRight: '0' }}>{row.category}</TableCell>
      <TableCell
        style={{
          textAlign: 'right',
        }}
      >
        <div style={{ marginRight: '1.5rem' }}>{row.mass}</div>
      </TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>
        <Button
          className={classes.buttonTable}
          onClick={() => showModalProduct(row)}
          variant="contained"
          color="secondary"
        >
          Xem
        </Button>
        <Button
          className={classes.buttonTable}
          onClick={() => removeProductHandler(row.id)}
          variant="contained"
          color="secondary"
        >
          Xoá
        </Button>
        <Button
          onClick={() => editProductHandler(row)}
          variant="contained"
          color="secondary"
        >
          Sửa
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableProductItem;
