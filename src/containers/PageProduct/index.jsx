import PageProduct from './PageProduct';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import TextField from '@material-ui/core/TextField';

const MainProductContainer = ({ classes }) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(ActionsModalProduct.addModalProduct());
  };

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <LayoutContainer classes={classes}>
          <HeaderContainer
            addHandler={addProductHandler}
            title="Sản Phẩm"
            buttonTitle="Thêm Sản Phẩm"
          />
        </LayoutContainer>
        <LayoutContainer classes={classes}>
          <TextField
            id="outlined-search"
            label="Tìm kiếm"
            placeholder="Tìm kiếm sản phẩm..."
            type="text"
            variant="outlined"
            color="primary"
          />
        </LayoutContainer>
        <LayoutContainer classes={classes}>
          <PageProduct />
        </LayoutContainer>
      </main>
    </>
  );
};

export default MainProductContainer;
