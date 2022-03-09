import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PageCategory from './PageCategory';
import TitleCategory from './TitleCategory';

const MainContainer = ({ classes }) => {
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TitleCategory />
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

export default MainContainer;
