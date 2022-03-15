import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Menu from '../Atomic/Menu/MenuList/index';
import MainCategoryContainer from '../containers/PageCategory/index';
import ShowModalCategory from '../Atomic/UI/ShowModalCategory';
import ShowModalProduct from '../Atomic/UI/ShowModalProduct';
import { useSelector } from 'react-redux';
import PageProduct from '../containers/PageProduct';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    marginLeft: '1rem',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

function App() {
  const isShowModalCategory = useSelector(
    (state) => state.modalCategory.isShowModalCategory
  );
  const isShowModalProduct = useSelector(
    (state) => state.modalProduct.isShowModalProduct
  );
  const classes = useStyles();

  return (
    <Router>
      {isShowModalCategory && <ShowModalCategory />}
      {isShowModalProduct && <ShowModalProduct />}
      <div className={classes.root}>
        <Menu classes={classes} />
        <Switch>
          <Route path="/category">
            <MainCategoryContainer classes={classes} />
          </Route>
          <Route path="/product">
            <PageProduct classes={classes} />
          </Route>
          <Route path="/">
            <MainCategoryContainer classes={classes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
