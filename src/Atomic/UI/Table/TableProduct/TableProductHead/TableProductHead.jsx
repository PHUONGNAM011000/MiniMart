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

const TableProductHead = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">STT</StyledTableCell>
        <StyledTableCell align="left">Tên sản phẩm</StyledTableCell>
        <StyledTableCell align="center">Ảnh&nbsp;</StyledTableCell>
        <StyledTableCell align="right">Số lượng&nbsp;</StyledTableCell>
        <StyledTableCell align="center">Mô tả&nbsp;</StyledTableCell>
        <StyledTableCell align="left">Danh mục &nbsp;</StyledTableCell>
        <StyledTableCell align="right">Khối lượng&nbsp;(kg)</StyledTableCell>
        <StyledTableCell align="left">Tình trạng&nbsp;</StyledTableCell>
        <StyledTableCell align="center">Hành động&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableProductHead;
