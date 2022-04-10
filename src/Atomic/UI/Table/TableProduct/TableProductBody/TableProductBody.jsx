import {
  Avatar,
  Button,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { dialogActions } from '../../../../../store/dialogSlice';
import { ActionsModalProduct } from '../../../../../store/modalProductSlicde';
import { ActionsProduct } from '../../../../../store/productSlice';
import DialogModalAlert from '../../../Modal/DialogModalAlert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  imgSize: {
    width: '100px',
    height: '100px',
  },
  name: {
    minWidth: '140px',
  },
  amount: {
    minWidth: '105px',
  },
  description: {
    minWidth: '220px !important',
  },
  category: {
    minWidth: '120px',
  },
  mass: {
    minWidth: '170px',
  },
  status: {
    minWidth: '115px',
  },
  button: {
    margin: '0.5rem',
    boxShadow: 'none',
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

const TableProductBody = ({ dataTable }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  const idDialog = useSelector((state) => state.dialog.idDialog);

  const titleDialog = useSelector((state) => state.dialog.titleDialog);

  const showModalProduct = (item) => {
    dispatch(ActionsModalProduct.showModalProduct(item));
  };

  const removeProductHandler = (id) => {
    dispatch(dialogActions.showDialog(id));
  };

  const closeDialogHandler = () => {
    dispatch(dialogActions.hideDialog());
  };

  const saveDialogHandler = () => {
    dispatch(ActionsProduct.removeProduct(idDialog));
    dispatch(dialogActions.hideDialog());
  };

  const editProductHandler = (item) => {
    dispatch(ActionsModalProduct.editModalProduct(item));
  };

  return (
    <>
      {titleDialog === 'remove' && (
        <DialogModalAlert
          open={true}
          onClose={closeDialogHandler}
          onSaveDialog={saveDialogHandler}
          title={t('removeTitleButtonDialogProduct')}
          titleButton={t('Remove')}
        />
      )}
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
            <StyledTableCell align="center">
              <Avatar
                variant="square"
                src={item.image}
                className={classes.imgSize}
              />
            </StyledTableCell>
            <StyledTableCell align="right" className={classes.amount}>
              {item.amount}
            </StyledTableCell>
            <StyledTableCell align="left" className={classes.description}>
              {item.description}
            </StyledTableCell>
            <StyledTableCell align="left" className={classes.category}>
              {item.category}
            </StyledTableCell>
            <StyledTableCell align="right" className={classes.mass}>
              {item.mass}
            </StyledTableCell>
            <StyledTableCell align="left" className={classes.status}>
              {item.status}
            </StyledTableCell>
            <StyledTableCell align="center" className={classes.groupButton}>
              <Button
                onClick={() => showModalProduct(item)}
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
              >
                <VisibilityIcon />
              </Button>
              <Button
                onClick={() => removeProductHandler(item.id)}
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
              >
                <DeleteIcon />
              </Button>
              <Button
                onClick={() => editProductHandler(item)}
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
              >
                <EditIcon />
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </>
  );
};

export default TableProductBody;
