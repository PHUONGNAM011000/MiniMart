import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModal } from '../../../../../store/modalCategorySlice';
import { dialogActions } from '../../../../../store/dialogSlice';
import DialogModalAlert from '../../../Modal/DialogModalAlert';
import { ActionsCategory } from '../../../../../store/categorySlice';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  const idDialog = useSelector((state) => state.dialog.idDialog);

  const titleDialog = useSelector((state) => state.dialog.titleDialog);

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
      {titleDialog === 'remove' && (
        <DialogModalAlert
          open={true}
          onClose={closeDialogHandler}
          onSaveDialog={saveDialogHandler}
          title={t('removeTitleButtonDialogCategory')}
          titleButton={t('Remove')}
        />
      )}
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
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => showCategoryProduct(item)}
              >
                <VisibilityIcon />
              </Button>
              <Button
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => removeProductHandler(item.id)}
              >
                <DeleteIcon />
              </Button>
              <Button
                className={classes.button}
                color={isColorPrimary ? 'primary' : 'secondary'}
                onClick={() => editCategoryHandler(item)}
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

export default TableBodyCategory;
