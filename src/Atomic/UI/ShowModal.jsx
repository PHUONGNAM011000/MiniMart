import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../Title/Title';
import Modal from './Modal';
import { ActionsModal } from '../../store/modalSlice';
import { ActionsCategory } from '../../store/categorySlice';

const useStyles = makeStyles(() => ({
  buttonModal: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
  },
}));

const ShowModal = () => {
  const categoryModal = useSelector((state) => state.modal.categoryModal);
  const input = useSelector((state) => state.modal.input);
  const dispatch = useDispatch();
  const classes = useStyles();

  const hideModalHandler = () => {
    dispatch(ActionsModal.hideModal());
  };

  const decripstionChangeHandler = (e) => {
    dispatch(ActionsModal.modalDecripstionChange(e.target.value));
  };

  const nameChangeHandler = (e) => {
    dispatch(ActionsModal.modalNameChange(e.target.value));
  };

  const editCategoryHandler = (item) => {
    console.log(item);
    dispatch(ActionsCategory.editCategory(item));
    dispatch(ActionsModal.hideModal());
  };

  return (
    <Modal onClose={hideModalHandler}>
      <Title>Tên Danh mục</Title>
      <Input
        type="text"
        fullWidth={true}
        readOnly={input}
        defaultValue={categoryModal.name}
        onChange={(e) => nameChangeHandler(e)}
      />
      <div style={{ marginTop: '10px' }}>
        <Title>Mô tả</Title>
        <Input
          type="text"
          fullWidth={true}
          readOnly={input}
          defaultValue={categoryModal.decripstion}
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
        {!input && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => editCategoryHandler(categoryModal)}
          >
            Lưu
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ShowModal;
