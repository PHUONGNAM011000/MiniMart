import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {
  DialogActions,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

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
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
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

const DialogModalAlert = ({
  open,
  onClose,
  onSaveDialog,
  title,
  titleButton,
}) => {
  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle onClose={onClose}>Bạn có chắc chắn {title}</DialogTitle>

      <DialogActions>
        <Button autoFocus color="primary" onClick={onClose}>
          Huỷ
        </Button>
        <Button autoFocus onClick={onSaveDialog} color="secondary">
          {titleButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModalAlert;
