import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch } from 'react-redux';
import { ActionsCategory } from '../../store/categorySlice';
import { ActionsModal } from '../../store/modalCategorySlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonTable: {
    marginRight: '1rem',

    '@media (max-width: 925px)': {
      display: 'block',
      marginRight: '0',
      marginBottom: '0.5rem',
    },
  },
}));

const TableCategoryItem = ({ row }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const removeHandler = (id) => {
    dispatch(ActionsCategory.remove(id));
  };

  const showHandler = (item) => {
    dispatch(ActionsModal.showModal({ ...item }));
  };

  const editHandler = (item) => {
    dispatch(ActionsModal.editModal({ ...item }));
  };

  return (
    <TableRow>
      <TableCell>{row.stt}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.decripstion}</TableCell>
      <TableCell>
        <Button
          className={classes.buttonTable}
          variant="contained"
          color="secondary"
          onClick={() => showHandler(row)}
        >
          Xem
        </Button>
        <Button
          className={classes.buttonTable}
          variant="contained"
          color="secondary"
          onClick={() => removeHandler(row.id)}
        >
          Xoá
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => editHandler(row)}
        >
          Sửa
        </Button>
        {/* </ButtonGroup> */}
      </TableCell>
    </TableRow>
  );
};

export default TableCategoryItem;
