import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Modal from './Modal';
import { ActionsModal } from '../../../store/modalCategorySlice';
import { ActionsCategory } from '../../../store/categorySlice';
import { dialogActions } from '../../../store/dialogSlice';
import DialogModal from './DialogModal';

const useStyles = makeStyles(() => ({
  buttonModal: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
  },
}));

const ShowModal = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const categoryModal = useSelector(
    (state) => state.modalCategory.categoryModal
  );
  const input = useSelector((state) => state.modalCategory.input);
  const checkValidateName = useSelector(
    (state) => state.modalCategory.checkValidateName
  );
  const checkValidateDecripstion = useSelector(
    (state) => state.modalCategory.checkValidateDecripstion
  );
  const validate = useSelector((state) => state.modalCategory.validate);
  const titleModal = useSelector((state) => state.modalCategory.titleModal);
  const isShowDialog = useSelector((state) => state.dialog.isShowDialog);

  const hideModalHandler = () => {
    dispatch(ActionsModal.hideModal());
  };

  const decripstionChangeHandler = (e) => {
    dispatch(ActionsModal.modalDecripstionChange(e.target.value));
  };

  const nameChangeHandler = (e) => {
    dispatch(ActionsModal.modalNameChange(e.target.value));
  };

  const editCategoryHandler = () => {
    if (categoryModal.name === '' || categoryModal.name === undefined) {
      dispatch(ActionsModal.checkName());
      return;
    }

    if (
      categoryModal.decripstion === undefined ||
      categoryModal.decripstion === ''
    ) {
      dispatch(ActionsModal.checkDescription());
      return;
    }

    dispatch(dialogActions.showDialog());
  };

  let titleModalCategory, titleDialog;

  if (titleModal === 'show') {
    titleModalCategory = <span>Xem</span>;
    titleDialog = '';
  } else if (titleModal === 'edit') {
    titleModalCategory = <span>Sửa</span>;
    titleDialog = 'sửa danh mục này không ?';
  } else {
    titleModalCategory = <span>Thêm</span>;
    titleDialog = 'thêm danh mục này không ?';
  }

  const closeDialogHandler = () => {
    dispatch(dialogActions.hideDialog());
  };

  const saveDialogHandler = () => {
    dispatch(dialogActions.hideDialog());
    dispatch(ActionsCategory.editCategory(categoryModal));
    dispatch(ActionsModal.hideModal());
  };

  return (
    <>
      {isShowDialog && (
        <DialogModal
          open={isShowDialog}
          onClose={closeDialogHandler}
          onSaveDialog={saveDialogHandler}
          title={titleDialog}
        />
      )}
      <Modal onClose={hideModalHandler}>
        <Typography variant="h3" color="initial" gutterBottom>
          {titleModalCategory} danh mục
        </Typography>
        <TextField
          error={checkValidateName}
          helperText={checkValidateName && 'Bạn chưa nhập tên danh mục'}
          color="primary"
          label="Tên Danh mục"
          variant="outlined"
          type="text"
          fullWidth={true}
          InputProps={{
            readOnly: input,
          }}
          value={categoryModal.name || ''}
          onChange={(e) => nameChangeHandler(e)}
        />
        <div style={{ marginTop: '20px' }}>
          <TextField
            error={checkValidateDecripstion}
            helperText={checkValidateDecripstion && 'Bạn chưa nhập mô tả'}
            multiline
            rows={5}
            color="primary"
            label="Mô tả"
            variant="outlined"
            type="text"
            fullWidth={true}
            InputProps={{
              readOnly: input,
            }}
            value={categoryModal.decripstion || ''}
            onChange={(e) => decripstionChangeHandler(e)}
          />
        </div>
        <div className={classes.buttonModal}>
          <Button
            onClick={() => hideModalHandler()}
            variant="contained"
            color="secondary"
            style={{
              marginRight: '5px',
            }}
          >
            Đóng
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => editCategoryHandler(categoryModal)}
            disabled={validate}
          >
            Lưu
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ShowModal;
