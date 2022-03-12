import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
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
    <Link className={classes.link} to={`${props.params}`}>
      <ListItem button>{props.children}</ListItem>
    </Link>
  );
};

export default MenuListItem;
