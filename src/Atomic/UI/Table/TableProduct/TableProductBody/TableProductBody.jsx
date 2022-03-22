import {
  Avatar,
  Button,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsModalProduct } from '../../../../../store/modalProductSlicde';
import { ActionsProduct } from '../../../../../store/productSlice';

const useStyles = makeStyles({
  imgSize: {
    width: '100px',
    height: '100px',
  },
  name: {
    minWidth: '140px',
  },
  amount: {
    minWidth: '100px',
  },
  description: {
    minWidth: '220px !important',
  },
  category: {
    minWidth: '120px',
  },
  mass: {
    minWidth: '140px',
  },
  status: {
    minWidth: '110px',
  },
  button: {
    margin: '0.5rem',
  },
  groupButton: {
    minWidth: '300px',
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableProductBody = ({ dataTable }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  const showModalProduct = (item) => {
    dispatch(ActionsModalProduct.showModalProduct(item));
  };

  const removeProductHandler = (id) => {
    dispatch(ActionsProduct.removeProduct(id));
  };

  const editProductHandler = (item) => {
    dispatch(ActionsModalProduct.editModalProduct(item));
  };

  return (
    <TableBody>
      {dataTable.map((item) => (
        <StyledTableRow key={item.id}>
          <StyledTableCell align="left">{item.stt}</StyledTableCell>
          <StyledTableCell
            align="left"
            component="th"
            scope="row"
            className={classes.name}
          >
            {item.name}
          </StyledTableCell>
          <StyledTableCell align="center">
            <Avatar
              variant="square"
              src={item.image}
              className={classes.imgSize}
            />
          </StyledTableCell>
          <StyledTableCell align="right" className={classes.amount}>
            {item.amount}
          </StyledTableCell>
          <StyledTableCell align="left" className={classes.description}>
            {item.description}
          </StyledTableCell>
          <StyledTableCell align="left" className={classes.category}>
            {item.category}
          </StyledTableCell>
          <StyledTableCell align="right" className={classes.mass}>
            {item.mass}
          </StyledTableCell>
          <StyledTableCell align="left" className={classes.status}>
            {item.status}
          </StyledTableCell>
          <StyledTableCell align="center" className={classes.groupButton}>
            <Button
              onClick={() => showModalProduct(item)}
              variant="contained"
              color={isColorPrimary ? 'primary' : 'secondary'}
              className={classes.button}
            >
              Xem
            </Button>
            <Button
              onClick={() => removeProductHandler(item.id)}
              variant="contained"
              color={isColorPrimary ? 'primary' : 'secondary'}
              className={classes.button}
            >
              Xoá
            </Button>
            <Button
              onClick={() => editProductHandler(item)}
              variant="contained"
              color={isColorPrimary ? 'primary' : 'secondary'}
              className={classes.button}
            >
              Sửa
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableProductBody;
