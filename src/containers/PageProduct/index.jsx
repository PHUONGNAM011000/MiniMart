import PageProduct from './PageProduct';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import Search from '../../Atomic/Search/Search';
import Container from '@material-ui/core/Container';

const MainProductContainer = ({ classes }) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(ActionsModalProduct.addModalProduct());
  };

  return (
    <>
      <main className={classes.content}>
        <div
          className={classes.appBarSpacer}
          style={{ backgroundColor: '#F9FAFC' }}
        />
        <Container maxWidth={false} className={classes.container}>
          <HeaderContainer
            addHandler={addProductHandler}
            title="Sản Phẩm"
            buttonTitle="Thêm Sản Phẩm"
          />
        </Container>
        <LayoutContainer classes={classes}>
          <Search />
        </LayoutContainer>
        <LayoutContainer classes={classes}>
          <PageProduct />
        </LayoutContainer>
      </main>
    </>
  );
};

export default MainProductContainer;
