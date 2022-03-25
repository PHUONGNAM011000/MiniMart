import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import { DUMMY_MENU_LIST } from '../Data/ArrayMenu';
import MenuListItem from '../Atomic/Menu/MenuList/MenuListItem';
import MenuItemIcon from '../Atomic/Menu/MenuList/MenuItemIcon/MenuItemIcon';
import MenuItemText from '../Atomic/Menu/MenuList/MenuItemText/MenuItemText';
import DashboardIcon from '../icons/DashboardIcon';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';

const useStyles = makeStyles({
  list: {
    width: 250,

    '@media screen and (min-width: 1000px)': {
      display: 'none',
    },
  },
  fullList: {
    width: 'auto',
  },
  menuMobileResponsive: {
    '@media screen and (min-width: 1000px)': {
      display: 'none',
    },
  },

  menuDesktopResponsive: {
    '@media screen and (min-width: 1000px)': {
      display: 'none',
    },
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <div className={classes.menuMobileResponsive}>
              <Drawer
                // variant="permanent"
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* <div className={classes.menuMobileResponsive}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, classes.drawerPaperClose),
          }}
          open={true}
        >
          <Divider />
          <List>
            {DUMMY_MENU_LIST.map((item) => (
              <MenuListItem
                key={item.id}
                params={`${item.id === 1 ? 'category' : 'product'}`}
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
      </div> */}
    </>
  );
}
