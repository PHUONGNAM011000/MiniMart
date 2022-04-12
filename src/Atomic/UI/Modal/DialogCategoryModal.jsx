import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ActionsModal } from '../../../store/modalCategorySlice';
import { ActionsCategory } from '../../../store/categorySlice';
import DialogModalAlert from './DialogModalAlert';
import { dialogActions } from '../../../store/dialogSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  buttonModal: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
  },
  flexProduct: {
    flexGrow: 1,
    // display: 'flex',

    '@media (max-width: 800px)': {
      flexDirection: 'column',
    },
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    maxHeight: '20rem',
    minWidth: '15rem',

    '@media (max-width: 800px)': {
      marginLeft: '0',
    },
  },
  imageModal: {
    width: '15rem',
    height: '15rem',
    borderRadius: '5px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    marginBottom: '2rem',
  },
  backdrop: {
    zIndex: '2000',
    color: '#fff',
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    marginRight: '5rem',
    '@media screen and (max-width: 800px)': {
      fontSize: '1.5rem',
    },
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className={classes.title}>
        {children}
      </Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogCategoryModal(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }, []);

  const categoryModal = useSelector(
    (state) => state.modalCategory.categoryModal
  );

  const input = useSelector((state) => state.modalCategory.input);

  const titleCategoryModal = useSelector(
    (state) => state.modalCategory.titleModal
  );

  const validate = useSelector((state) => state.modalCategory.validate);

  const checkValidateName = useSelector(
    (state) => state.modalCategory.checkValidateName
  );

  const checkValidateDecripstion = useSelector(
    (state) => state.modalCategory.checkValidateDecripstion
  );

  const titleDialog = useSelector((state) => state.dialog.titleDialog);

  const nameCategoryChangeHandler = (e) => {
    dispatch(ActionsModal.modalNameChange(e.target.value));
  };

  const descriptionCategoryChangeHandler = (e) => {
    dispatch(ActionsModal.modalDecripstionChange(e.target.value));
  };

  const hideModalCategoryHandler = () => {
    dispatch(ActionsModal.hideModal());
  };

  const closeDialogHandler = () => {
    dispatch(dialogActions.hideDialog());
  };

  const saveDialogHandler = () => {
    dispatch(ActionsModal.hideModal());
    dispatch(dialogActions.hideDialog());
    dispatch(ActionsCategory.editCategory(categoryModal));
  };

  const editCategoryHandler = () => {
    const validateName =
      categoryModal.name === '' || categoryModal.name === undefined;
    const validateDescription =
      categoryModal.decripstion === '' ||
      categoryModal.decripstion === undefined;

    if (validateName) {
      dispatch(ActionsModal.checkName());
    }

    if (validateDescription) {
      dispatch(ActionsModal.checkDescription());
    }

    if (!validateName && !validateDescription) {
      dispatch(dialogActions.editDialog());
    }
  };

  let titleModal, titleButton, titleButtonDialog;

  if (titleCategoryModal === 'show') {
    titleModal = t('Show');
  } else if (titleCategoryModal === 'edit') {
    titleModal = t('Edit');
    titleButton = t('Save');
    titleButtonDialog = t('editTitleButtonDialogCategory');
  } else {
    titleModal = t('Add');
    titleButton = t('Add');
    titleButtonDialog = t('addTitleButtonDialogCategory');
  }

  return (
    <>
      <Backdrop
        className={classes.backdrop}
        open={open}
        style={{ zIndex: '1500' }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {titleDialog === 'edit' && (
        <DialogModalAlert
          open={true}
          onClose={closeDialogHandler}
          onSaveDialog={saveDialogHandler}
          title={titleButtonDialog}
          titleButton={titleButton}
        />
      )}

      {!open && (
        <Dialog
          onClose={() => hideModalCategoryHandler()}
          aria-labelledby="customized-dialog-title"
          open={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={() => hideModalCategoryHandler()}
          >
            <span>{titleModal}</span> {t('category')}
          </DialogTitle>
          <DialogContent dividers>
            <div className={classes.flexProduct}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    error={checkValidateName}
                    helperText={checkValidateName && t('errorNameCategory')}
                    color="primary"
                    label={t('nameCategory')}
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    InputProps={{
                      readOnly: input,
                    }}
                    value={categoryModal.name || ''}
                    onChange={(e) => nameCategoryChangeHandler(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={checkValidateDecripstion}
                    helperText={
                      checkValidateDecripstion && t('errorDescription')
                    }
                    color="primary"
                    label={t('description')}
                    variant="outlined"
                    type="text"
                    multiline
                    rows={5}
                    fullWidth={true}
                    InputProps={{
                      readOnly: input,
                    }}
                    value={categoryModal.decripstion || ''}
                    onChange={(e) => descriptionCategoryChangeHandler(e)}
                  />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <div className={classes.buttonModal}>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  marginRight: '5px',
                }}
                onClick={() => hideModalCategoryHandler()}
              >
                {t('close')}
              </Button>
              {titleCategoryModal !== 'show' && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => editCategoryHandler()}
                  disabled={validate}
                >
                  {titleModal}
                </Button>
              )}
            </div>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
