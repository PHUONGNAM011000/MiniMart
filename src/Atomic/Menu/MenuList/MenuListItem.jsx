import ListItem from '@material-ui/core/ListItem';

const MenuListItem = (props) => {
  return <ListItem button>{props.children}</ListItem>;
};

export default MenuListItem;
