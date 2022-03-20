import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PageCategory from './PageCategory';
import HeaderContainer from '../../Atomic/UI/Title/HeaderContainer';
import { useDispatch } from 'react-redux';
import { ActionsModal } from '../../store/modalCategorySlice';

const MainCategoryContainer = ({ classes }) => {
  const dispatch = useDispatch();

  const addCategoryHandler = () => {
    dispatch(ActionsModal.showAddCategory());
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <HeaderContainer
                addHandler={addCategoryHandler}
                title="Danh Mục Sản Phẩm"
                buttonTitle="Thêm Danh Mục"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <PageCategory />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default MainCategoryContainer;
