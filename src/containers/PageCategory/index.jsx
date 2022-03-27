import PageCategory from './PageCategory';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModal } from '../../store/modalCategorySlice';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import Search from '../../Atomic/Search/Search';
import { Container } from '@material-ui/core';

const MainCategoryContainer = ({ classes }) => {
  const dispatch = useDispatch();

  const addCategoryHandler = () => {
    dispatch(ActionsModal.showAddCategory());
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
        <Search></Search>
      </LayoutContainer>
      <LayoutContainer classes={classes}>
        <PageCategory />
      </LayoutContainer>
      <div className={classes.appBarSpacer} />
    </main>
  );
};

export default MainCategoryContainer;
