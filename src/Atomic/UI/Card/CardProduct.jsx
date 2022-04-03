import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../../store/modalProductSlicde';
import { dialogActions } from '../../../store/dialogSlice';
import { ActionsProduct } from '../../../store/productSlice';
import DialogModalAlert from '../Modal/DialogModalAlert';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
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
  media: {
    height: 240,
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    backgroundSize: 'cover',
  },
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    height: 'fit-content',
  },

  cardContent: {
    backgroundColor: '#fff',
  },

  cardActions: {
    justifyContent: 'center',
  },
});

export default function CardProduct({ dataTable }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );
  const dispatch = useDispatch();

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

      <Card className={classes.root}>
        {dataTable.map((item) => (
          <div className={classes.cardItem} key={item.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`STT: ${item.stt}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`Amount: ${item.amount}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`Description: ${item.description}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`Mass: ${item.mass}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`Category: ${item.category}`}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{`Status: ${item.status}`}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Button
                color={isColorPrimary ? 'primary' : 'secondary'}
                className={classes.button}
                onClick={() => showModalProduct(item)}
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
            </CardActions>
          </div>
        ))}
      </Card>
    </>
  );
}
