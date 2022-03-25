import PageCategory from './PageCategory';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModal } from '../../store/modalCategorySlice';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';

const MainCategoryContainer = ({ classes }) => {
  const dispatch = useDispatch();

  const addCategoryHandler = () => {
    dispatch(ActionsModal.showAddCategory());
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <LayoutContainer classes={classes}>
        <HeaderContainer
          addHandler={addCategoryHandler}
          title="Danh Mục Sản Phẩm"
          buttonTitle="Thêm Danh Mục"
        />
      </LayoutContainer>
      <LayoutContainer classes={classes}>
        <PageCategory />
      </LayoutContainer>
    </main>
  );
};

export default MainCategoryContainer;
