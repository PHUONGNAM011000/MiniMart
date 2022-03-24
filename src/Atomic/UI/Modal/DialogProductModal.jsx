import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Avatar, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModalProduct } from '../../../store/modalProductSlicde';
import { ActionsProduct } from '../../../store/productSlice';
import SelectCategory from '../Select/SelectCategory';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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

export default function DialogProductModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }, []);

  const productModal = useSelector((state) => state.modalProduct.productModal);
  const showInputProduct = useSelector(
    (state) => state.modalProduct.showInputProduct
  );
  const titleProductModal = useSelector(
    (state) => state.modalProduct.titleProductModal
  );

  const validate = useSelector((state) => state.modalProduct.validate);

  const dataCategory = useSelector((state) => state.category.dataCategory);

  const checkName = useSelector((state) => state.modalProduct.checkName);

  const checkImage = useSelector((state) => state.modalProduct.checkImage);

  const checkAmount = useSelector((state) => state.modalProduct.checkAmount);

  const checkMass = useSelector((state) => state.modalProduct.checkMass);

  const checkDescription = useSelector(
    (state) => state.modalProduct.checkDescription
  );

  const hideModalProductHandler = () => {
    dispatch(ActionsModalProduct.hideModalProduct());
  };

  const NameProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.nameChanged(e.target.value));
  };

  const urlProductChangeHandler = (e) => {
    dispatch(ActionsModalProduct.urlChanged(e.target.value));
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

  const StatusProductChangeHandler = (e, v) => {
    dispatch(ActionsModalProduct.statusChanged(v));
  };

  const categoryModalChangeHandler = (e, v) => {
    dispatch(ActionsModalProduct.categoryChanged(v));
  };

  const editProductHandler = () => {
    const validateName =
      productModal.name === '' || productModal.name === undefined;
    const validateImage =
      productModal.image === '' || productModal.image === undefined;
    const validateAmount =
      productModal.amount === '' || productModal.amount === undefined;
    const validateDescription =
      productModal.description === '' || productModal.description === undefined;
    const validateMass =
      productModal.mass === '' || productModal.mass === undefined;

    if (validateName) {
      dispatch(ActionsModalProduct.checkNameHandled());
    }
    if (validateImage) {
      dispatch(ActionsModalProduct.checkImageHandled());
    }
    if (validateAmount) {
      dispatch(ActionsModalProduct.checkAmountHandled());
    }
    if (validateDescription) {
      dispatch(ActionsModalProduct.checkDescriptionHandled());
    }
    if (validateMass) {
      dispatch(ActionsModalProduct.checkMassHandled());
    }

    if (
      !validateName &&
      !validateImage &&
      !validateAmount &&
      !validateDescription &&
      !validateMass
    )
      dispatch(ActionsProduct.editProduct(productModal));
    dispatch(ActionsModalProduct.hideModalProduct());
  };

  let titleModal;

  if (titleProductModal === 'show') {
    titleModal = 'Xem';
  } else if (titleProductModal === 'edit') {
    titleModal = 'Sửa';
  } else {
    titleModal = 'Thêm';
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

      {!open && (
        <Dialog
          onClose={() => hideModalProductHandler()}
          aria-labelledby="customized-dialog-title"
          open={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={() => hideModalProductHandler()}
          >
            <span>{titleModal}</span> sản phẩm
          </DialogTitle>
          <DialogContent dividers>
            <div className={classes.flexProduct}>
              {titleProductModal !== 'add' && (
                <Grid item xs={12}>
                  <Avatar
                    variant="square"
                    className={classes.imageModal}
                    src={productModal.image}
                  />
                </Grid>
              )}
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    error={checkName}
                    helperText={checkName && 'Bạn chưa nhập tên sản phẩm'}
                    color="primary"
                    label="Tên sản phẩm"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    InputProps={{
                      readOnly: showInputProduct,
                    }}
                    value={productModal.name || ''}
                    onChange={(e) => NameProductChangeHandler(e)}
                  />
                </Grid>
                {titleProductModal === 'add' && (
                  <Grid item xs={12}>
                    <TextField
                      error={checkImage}
                      helperText={checkImage && 'Bạn chưa nhập Url ảnh'}
                      color="primary"
                      label="Url ảnh"
                      variant="outlined"
                      type="text"
                      fullWidth={true}
                      InputProps={{
                        readOnly: showInputProduct,
                      }}
                      onChange={(e) => urlProductChangeHandler(e)}
                    />
                  </Grid>
                )}
                <Grid item xs={6}>
                  <TextField
                    error={checkAmount}
                    helperText={checkAmount && 'Bạn chưa nhập số lượng'}
                    color="primary"
                    label="Số lượng"
                    type="number"
                    variant="outlined"
                    fullWidth={true}
                    InputProps={{
                      readOnly: showInputProduct,
                    }}
                    value={productModal.amount || ''}
                    onChange={(e) => AmountProductChangeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SelectCategory
                    data={dataCategory.map((item) => item.name)}
                    value={productModal.category}
                    showInputProduct={showInputProduct}
                    defaultValue={'Áo Thun'}
                    label={'Danh mục'}
                    onChange={categoryModalChangeHandler}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={checkMass}
                    helperText={checkMass && 'Bạn chưa nhập khối lượng'}
                    color="primary"
                    type="text"
                    label="Khối lượng"
                    fullWidth={true}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">kg</InputAdornment>
                      ),
                      readOnly: showInputProduct,
                    }}
                    variant="outlined"
                    value={productModal.mass || ''}
                    onChange={(e) => MassProductChangeHandler(e)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SelectCategory
                    data={['Hết hàng', 'Còn hàng']}
                    value={productModal.status}
                    showInputProduct={showInputProduct}
                    defaultValue={'Còn hàng'}
                    label={'Trạng thái'}
                    onChange={StatusProductChangeHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={checkDescription}
                    helperText={checkDescription && 'Bạn chưa nhập Mô tả'}
                    color="primary"
                    label="Mô tả"
                    variant="outlined"
                    type="text"
                    multiline
                    rows={5}
                    fullWidth={true}
                    InputProps={{
                      readOnly: showInputProduct,
                    }}
                    value={productModal.description || ''}
                    onChange={(e) => DescriptionProductChangeHandler(e)}
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
                onClick={() => hideModalProductHandler()}
              >
                Đóng
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => editProductHandler()}
                disabled={validate}
              >
                Lưu
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
