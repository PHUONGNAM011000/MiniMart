import { TableRow } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F3F4F6',
    color: theme.palette.common.black,
    fontSize: '1rem',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableHeadCategory = () => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">{t('stt')}</StyledTableCell>
        <StyledTableCell align="left">{t('category')}</StyledTableCell>
        <StyledTableCell align="left">{t('description')}&nbsp;</StyledTableCell>
        <StyledTableCell align="center">{t('action')}&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadCategory;
