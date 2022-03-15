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
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="contained primary button group"
        >
          <Button
            className={classes.buttonTable}
            onClick={() => showHandler(row)}
          >
            Xem
          </Button>
          <Button
            className={classes.buttonTable}
            onClick={() => removeHandler(row.id)}
          >
            Xoá
          </Button>
          <Button onClick={() => editHandler(row)}>Sửa</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default TableCategoryItem;