import PageProduct from './PageProduct';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModalProduct } from '../../store/modalProductSlicde';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import Search from '../../Atomic/Search/Search';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { ActionsSearch } from '../../store/searchSlice';

const MainProductContainer = ({ classes }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);

  const searchChangeHandler = (e) => {
    dispatch(ActionsSearch.searchChanged(e.target.value));
  };
  const addProductHandler = () => {
    dispatch(ActionsModalProduct.addModalProduct());
  };

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <HeaderContainer
            addHandler={addProductHandler}
            title={t('titleProduct')}
            buttonTitle={t('buttonProduct')}
          />
        </Container>
        <LayoutContainer classes={classes}>
          <Search
            value={searchQuery}
            onSearchChange={searchChangeHandler}
            title={t('titleSearchProduct')}
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
