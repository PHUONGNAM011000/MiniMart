import { Avatar, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import { ActionsProduct } from '../../store/productSlice';

import Title from '../Title/Title';
import Modal from './Modal';

const useStyles = makeStyles(() => ({
  buttonModal: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
  },
  marginInput: {
    marginTop: '10px',
  },
  flexProduct: {
    display: 'flex',
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    marginLeft: '2rem',
  },
  imageModal: {
    width: '230px',
    height: '233px',
    borderRadius: '5px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
  },
  input: {
    minWidth: '150px',
  },
}));

const ShowModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productModal = useSelector((state) => state.modalProduct.productModal);
  const showInputProduct = useSelector(
    (state) => state.modalProduct.showInputProduct
  );

  const hideModalProductHandler = () => {
    dispatch(ActionsModalProduct.hideModalProduct());
  };

  const NameProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.nameChanged(e.target.value));
  };

  const AmountProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.amountChanged(e.target.value));
  };

  const MassProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.massChanged(e.target.value));
  };

  const DescriptionProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.descriptionChanged(e.target.value));
  };

  const CategoryProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.categoryChanged(e.target.value));
  };

  const StatusProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.statusChanged(e.target.value));
  };

  const editProductHandler = (product) => {
    dispatch(ActionsProduct.editProduct(product));
    dispatch(ActionsModalProduct.hideModalProduct());
  };

  return (
    <Modal onClose={hideModalProductHandler}>
      <div className={classes.flexProduct}>
        <div>
          <Avatar
            variant="square"
            className={classes.imageModal}
            src={productModal.image}
          />
        </div>
        <div className={classes.flexContent}>
          <div>
            <Title>Tên Sản Phẩm</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.name}
              readOnly={showInputProduct}
              className={classes.input}
              onChange={(e) => NameProductChangeHandler(e)}
            />
          </div>
          <div className={classes.marginInput}>
            <Title>Số Lượng</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.amount}
              readOnly={showInputProduct}
              className={classes.input}
              onChange={(e) => AmountProductChangeHandler(e)}
            />
          </div>
          <div className={classes.marginInput}>
            <Title>Mô tả</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.description}
              readOnly={showInputProduct}
              className={classes.input}
              onChange={(e) => DescriptionProductChangeHandler(e)}
            />
          </div>
          <div className={classes.marginInput}>
            <Title>Khối Lượng</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.mass}
              readOnly={showInputProduct}
              className={classes.input}
              onChange={(e) => MassProductChangeHandler(e)}
            />
          </div>
          <div className={classes.marginInput}>
            <Title>Danh mục</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.category}
              readOnly={showInputProduct}
              className={classes.input}
              onChange={(e) => CategoryProductChangeHandler(e)}
            />
          </div>
          <div className={classes.marginInput}>
            <Title>Trạng Thái</Title>
            <Input
              type="text"
              fullWidth={true}
              value={productModal.status}
              readOnly={showInputProduct}
              onChange={(e) => StatusProductChangeHandler(e)}
            />
          </div>
          <div className={classes.buttonModal}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                marginRight: '5px',
              }}
              onClick={() => hideModalProductHandler()}
            >
              Đóng
            </Button>
            {!showInputProduct && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => editProductHandler(productModal)}
              >
                Lưu
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShowModal;
