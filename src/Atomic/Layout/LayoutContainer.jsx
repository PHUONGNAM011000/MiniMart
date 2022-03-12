import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const LayoutContainer = ({ classes, children }) => {
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LayoutContainer;
