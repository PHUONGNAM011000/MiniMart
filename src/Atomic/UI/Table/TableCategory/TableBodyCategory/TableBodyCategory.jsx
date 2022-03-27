import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  name: {
    minWidth: '140px',
  },
  description: {
    minWidth: '220px',
  },
  button: {
    margin: '0.5rem',
  },
  groupButton: {
    minWidth: '280px',
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

  const isShowDialog = useSelector((state) => state.dialog.isShowDialog);

  const idDialog = useSelector((state) => state.dialog.idDialog);

  //   const showModalProduct = (item) => {
  //     dispatch(ActionsModalProduct.showModalProduct(item));
  //   };

  //   const removeProductHandler = (id) => {
  //     dispatch(dialogActions.showDialog(id));
  //   };

  //   const closeDialogHandler = () => {
  //     dispatch(dialogActions.hideDialog());
  //   };

  //   const saveDialogHandler = () => {
  //     dispatch(ActionsProduct.removeProduct(idDialog));
  //     dispatch(dialogActions.hideDialog());
  //   };

  //   const editProductHandler = (item) => {
  //     dispatch(ActionsModalProduct.editModalProduct(item));
  //   };

  return (
    <>
      {/* <DialogModalAlert
        open={isShowDialog}
        // onClose={closeDialogHandler}
        // onSaveDialog={saveDialogHandler}
        title={'xoá sản phẩm này không ?'}
        titleButton={'Xoá'}
      /> */}

      {/* {dataTable.length === 0 && (
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
            <StyledTableCell align="left">{item.stt}</StyledTableCell>
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
              >
                Xem
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
              >
                Xoá
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
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
