import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';
import { ActionsModal } from '../../../store/modalCategorySlice';
import { dialogActions } from '../../../store/dialogSlice';
import { ActionsCategory } from '../../../store/categorySlice';
import DialogModalAlert from '../Modal/DialogModalAlert';

const useStyles = makeStyles({
  root: {
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',

    '@media screen and (max-width: 550px)': {
      gridTemplateColumns: '1fr',
    },

    '@media screen and (min-width: 800px)': {
      display: 'none',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    justifyContent: 'center',
  },
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    height: 'fit-content',
  },
  cardContent: {
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
});

export default function CardCategory({ dataTable }) {
  const classes = useStyles();
  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

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

      <Card className={classes.root}>
        {dataTable.map((item) => (
          <div className={classes.cardItem} key={item.id}>
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {t('nameCategory')}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {t('description')}
              </Typography>
              <Typography variant="body2" component="p">
                {item.decripstion}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
                onClick={() => showCategoryProduct(item)}
              >
                <VisibilityIcon />
              </Button>
              <Button
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
                onClick={() => removeProductHandler(item.id)}
              >
                <DeleteIcon />
              </Button>
              <Button
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
                onClick={() => editCategoryHandler(item)}
              >
                <EditIcon />
              </Button>
            </CardActions>
          </div>
        ))}
      </Card>
    </>
  );
}
