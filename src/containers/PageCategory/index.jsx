import PageCategory from './PageCategory';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModal } from '../../store/modalCategorySlice';
import LayoutContainer from '../../Atomic/Layout/LayoutContainer';
import Search from '../../Atomic/Search/Search';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const MainCategoryContainer = ({ classes }) => {
  const { t } = useTranslation();
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
          title={t('titleCategory')}
          buttonTitle={t('buttonTitle')}
        />
      </Container>
      <LayoutContainer classes={classes}>
        <Search title={t('titleSearchCategory')} />
      </LayoutContainer>
      <LayoutContainer classes={classes}>
        <PageCategory />
      </LayoutContainer>
      <div className={classes.appBarSpacer} />
    </main>
  );
};

export default MainCategoryContainer;
