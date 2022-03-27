import { TableRow } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F3F4F6',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableHeadCategory = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">STT</StyledTableCell>
        <StyledTableCell align="left">Tên sản phẩm</StyledTableCell>
        <StyledTableCell align="left">Mô tả&nbsp;</StyledTableCell>
        <StyledTableCell align="center">Hành động&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadCategory;
