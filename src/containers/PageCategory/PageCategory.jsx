import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
// import TableCategoryItem from '../../Atomic/UI/Table/TableCategoryItem';
import SelectSort from '../../Atomic/UI/Select/SelectSort';
import TableCategory from '../../Atomic/UI/Table/TableCategory/TableCategory';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1);',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  tableTitle: {
    marginLeft: '1rem',
  },
  titleEmty: {
    marginTop: '1rem',
    marginLeft: '5px',
  },
}));

export default function PageCategory() {
  const classes = useStyles();
  const dataCategory = useSelector((state) => state.category.dataCategory);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectSort />
        <div style={{ display: 'flex' }}>
          <p className={classes.tableTitle}>SỐ LƯỢNG : </p>
          &nbsp;
          <p>{dataCategory.length}</p>
        </div>
      </div>

      <TableCategory dataTable={dataCategory} />
    </React.Fragment>
  );
}
