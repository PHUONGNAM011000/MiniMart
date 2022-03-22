import { TableRow } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableProductHead = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">STT</StyledTableCell>
        <StyledTableCell align="left">Tên Sản Phẩm</StyledTableCell>
        <StyledTableCell align="center">Ảnh&nbsp;</StyledTableCell>
        <StyledTableCell align="right">Số Lượng&nbsp;</StyledTableCell>
        <StyledTableCell align="center">Mô tả&nbsp;</StyledTableCell>
        <StyledTableCell align="left">Danh Mục&nbsp;</StyledTableCell>
        <StyledTableCell align="right">Khối Lượng&nbsp;(kg)</StyledTableCell>
        <StyledTableCell align="left">Tình Trạng&nbsp;</StyledTableCell>
        <StyledTableCell align="center">Hành động&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableProductHead;
