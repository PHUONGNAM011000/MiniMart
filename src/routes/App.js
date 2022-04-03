import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Menu from '../Atomic/Menu/MenuList/index';
import MainCategoryContainer from '../containers/PageCategory/index';
import { useSelector } from 'react-redux';
import PageProduct from '../containers/PageProduct';
import DialogProductModal from '../Atomic/UI/Modal/DialogProductModal';
import DialogCategoryModal from '../Atomic/UI/Modal/DialogCategoryModal';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,

    '@media screen and (max-width: 450px)': {
      justifyContent: 'space-between',
    },
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
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    height: '27px',
    flexGrow: 1,

    // '@media screen and (max-width: 300px)': {
    //   width: '10rem',
    // },

    '@media screen and (max-width: 450px)': {
      display: 'none',
    },
  },
  nameUser: {
    flexGrow: 1,
    marginRight: '1rem',

    '@media screen and (max-width: 650px)': {
      display: 'none',
    },
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
    overflow: 'auto',
    height: '100vh',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundImage:
      'url(https://images.unsplash.com/photo-1648492694364-26cf4b39806b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
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
  const classes = useStyles();
  const isShowModalCategory = useSelector(
    (state) => state.modalCategory.isShowModalCategory
  );
  const isShowModalProduct = useSelector(
    (state) => state.modalProduct.isShowModalProduct
  );

  return (
    <Router>
      {isShowModalCategory && <DialogCategoryModal titleModal="danh mục" />}
      {isShowModalProduct && <DialogProductModal titleModal="sản phẩm" />}
      <div className={classes.root}>
        <Menu classes={classes} />
        <Switch>
          <Route path="/category">
            <MainCategoryContainer classes={classes} />
          </Route>
          <Route path="/product">
            <PageProduct classes={classes} />
          </Route>
          <Route exact path="/">
            <MainCategoryContainer classes={classes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
