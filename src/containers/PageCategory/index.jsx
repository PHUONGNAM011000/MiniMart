import PageCategory from './PageCategory';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModal } from '../../store/modalCategorySlice';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import Search from '../../Atomic/Search/Search';
import { Container } from '@material-ui/core';
import { ActionsSearch } from '../../store/searchSlice';

const MainCategoryContainer = ({ classes }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const addCategoryHandler = () => {
    dispatch(ActionsModal.showAddCategory());
  };

  const searchChangeHandler = (e) => {
    dispatch(ActionsSearch.searchChanged(e.target.value));
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth={false} className={classes.container}>
        <HeaderContainer
          addHandler={addCategoryHandler}
          title="Danh Mục Sản Phẩm"
          buttonTitle="Thêm Danh Mục"
        />
      </Container>
      <LayoutContainer classes={classes}>
        <Search value={searchQuery} onSearchChange={searchChangeHandler} />
      </LayoutContainer>
      <LayoutContainer classes={classes}>
        <PageCategory />
      </LayoutContainer>
      <div className={classes.appBarSpacer} />
    </main>
  );
};

export default MainCategoryContainer;
