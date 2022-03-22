import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogTitle } from '@material-ui/core';

const DialogModal = ({ open, onClose, onSaveDialog, title }) => {
  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle id="customized-dialog-title">
        Bạn có chắc chắn {title}
      </DialogTitle>

      <DialogActions>
        <Button autoFocus color="primary" onClick={onClose}>
          Huỷ
        </Button>
        <Button autoFocus onClick={onSaveDialog} color="secondary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
