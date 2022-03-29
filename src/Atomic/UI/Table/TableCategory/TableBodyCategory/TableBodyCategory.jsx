import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModal } from '../../../../../store/modalCategorySlice';
import { dialogActions } from '../../../../../store/dialogSlice';
import DialogModalAlert from '../../../Modal/DialogModalAlert';
import { ActionsCategory } from '../../../../../store/categorySlice';

const useStyles = makeStyles({
  stt: {
    width: '70px',
    minWidth: '70px',
  },
  name: {
    width: '150px',
    minWidth: '150px',
  },
  description: {
    minWidth: '300px',
  },
  button: {
    margin: '0.5rem',
    boxShadow: 'none',
  },
  groupButton: {
    width: '300px',
    minWidth: '300px',
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: '#F7F8F8',
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableBodyCategory = ({ dataTable }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  // const dataCategory = useSelector((state) => state.category.dataCategory);

  const isShowDialog = useSelector((state) => state.dialog.isShowDialog);

  const idDialog = useSelector((state) => state.dialog.idDialog);

  const showCategoryProduct = (item) => {
    dispatch(ActionsModal.showModal(item));
  };

  const removeProductHandler = (id) => {
    dispatch(dialogActions.showDialog(id));
  };

  const closeDialogHandler = () => {
    dispatch(dialogActions.hideDialog());
  };

  const saveDialogHandler = () => {
    dispatch(ActionsCategory.remove(idDialog));
    dispatch(dialogActions.hideDialog());
  };

  const editCategoryHandler = (item) => {
    dispatch(ActionsModal.editModal(item));
  };

  return (
    <>
      <DialogModalAlert
        open={isShowDialog}
        onClose={closeDialogHandler}
        onSaveDialog={saveDialogHandler}
        title={'xoá sản phẩm này không ?'}
        titleButton={'Xoá'}
      />

      {/* {dataCategory.length === 0 && (
        <Typography
          display="block"
          style={{ width: '220px', margin: '1rem 0.5rem' }}
        >
          Hiện không có sản phẩm nào
        </Typography>
      )} */}

      <TableBody>
        {dataTable.map((item) => (
          <StyledTableRow key={item.id}>
            <StyledTableCell align="left" className={classes.stt}>
              {item.stt}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              component="th"
              scope="row"
              className={classes.name}
            >
              {item.name}
            </StyledTableCell>
            <StyledTableCell align="left" className={classes.description}>
              {item.decripstion}
            </StyledTableCell>
            <StyledTableCell align="center" className={classes.groupButton}>
              <Button
                variant="contained"
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => showCategoryProduct(item)}
              >
                Xem
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => removeProductHandler(item.id)}
              >
                Xoá
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => editCategoryHandler(item)}
              >
                Sửa
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </>
  );
};

export default TableBodyCategory;
