import PageProduct from './PageProduct';
import HeaderContainer from '../../Atomic/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import { Input } from '@material-ui/core';

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
          <p>Tìm kiếm sản phẩm</p>
          <Input placeholder="search ..."></Input>
        </LayoutContainer>
        <LayoutContainer classes={classes}>
          <PageProduct />
        </LayoutContainer>
      </main>
    </>
  );
};

export default MainProductContainer;
