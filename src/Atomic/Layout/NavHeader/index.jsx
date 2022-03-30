import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsMenu } from '../../../store/menuSlice';
import Switch from '@material-ui/core/Switch';
import { ActionsCustomTheme } from '../../../store/customThemeSlice';
import SelectLanguage from '../../UI/Select/SelectLanguage';
import { useTranslation } from 'react-i18next';

const NavHeader = ({ classes }) => {
  const { i18n } = useTranslation();
  const open = useSelector((state) => state.menu.isShow);
  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(ActionsMenu.showMenu());
  };

  const handleChangeTheme = () => {
    dispatch(ActionsCustomTheme.colorChange());
  };

  const selectChangeHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, !open && classes.appBarShifts)}
        color={isColorPrimary ? 'primary' : 'secondary'}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.menuButtonHidden)}
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
              className={classes.nameUser}
            >
              Phương Nam
            </Typography>
            <Switch
              checked={isColorPrimary}
              onChange={handleChangeTheme}
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <SelectLanguage selectChangeHandler={selectChangeHandler} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavHeader;
