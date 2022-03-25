import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import MenuListItem from './MenuListItem';
import MenuItemIcon from './MenuItemIcon/MenuItemIcon';
import MenuItemText from './MenuItemText/MenuItemText';
import DashboardIcon from '../../../icons/DashboardIcon';
import ShoppingCartIcon from '../../../icons/ShoppingCartIcon';
import { DUMMY_MENU_LIST } from '../../../Data/ArrayMenu';
import NavHeader from '../../Layout/NavHeader/index';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsMenu } from '../../../store/menuSlice';

const Menu = ({ classes }) => {
  const open = useSelector((state) => state.menu.isShow);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(ActionsMenu.showMenu());
  };

  const handleDrawerClose = () => {
    dispatch(ActionsMenu.hideMenu());
  };

  return (
    <>
      <NavHeader
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        variant="temporary"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
        onClose={handleDrawerClose}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {DUMMY_MENU_LIST.map((item) => (
            <MenuListItem
              key={item.id}
              params={`${item.id === 1 ? 'category' : 'product'}`}
              onClick={handleDrawerClose}
            >
              <MenuItemIcon>
                {item.id === 1 ? <DashboardIcon /> : <ShoppingCartIcon />}
              </MenuItemIcon>
              <MenuItemText text={item.name} />
            </MenuListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Menu;
