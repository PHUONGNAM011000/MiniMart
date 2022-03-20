import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsMenu } from '../../../store/menuSlice';

const NavHeader = ({ classes }) => {
  const open = useSelector((state) => state.menu.isShow);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(ActionsMenu.showMenu());
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        color="secondary"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            MiniMart
          </Typography>
          <div className={classes.user}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              style={{
                cursor: 'pointer',
              }}
            />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Phương Nam
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavHeader;
