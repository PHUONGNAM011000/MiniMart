import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import { ActionsProduct } from '../../store/productSlice';

const useStyles = makeStyles((theme) => ({
  imgSize: {
    width: '100px',
    height: '100px',
  },
  buttonTable: {
    marginRight: '1rem',
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
      <TableCell>{row.stt}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>
        <Avatar variant="square" src={row.image} className={classes.imgSize} />
      </TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell>{row.mass}</TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="contained primary button group"
        >
          <Button
            className={classes.buttonTable}
            onClick={() => showModalProduct(row)}
          >
            Xem
          </Button>
          <Button
            className={classes.buttonTable}
            onClick={() => removeProductHandler(row.id)}
          >
            Xoá
          </Button>
          <Button onClick={() => editProductHandler(row)}>Sửa</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default TableProductItem;
