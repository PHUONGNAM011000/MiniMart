import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: '#000',
  },
}));

const MenuListItem = (props) => {
  const classes = useStyles();

  return (
    <NavLink
      className={classes.link}
      to={`${props.params}`}
      onClick={props.onClick}
    >
      <ListItem button>{props.children}</ListItem>
    </NavLink>
  );
};

export default MenuListItem;
