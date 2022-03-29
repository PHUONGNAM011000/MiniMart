import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import SelectCategorySort from '../../Atomic/UI/Select/SelectCategorySort';
import TableCategory from '../../Atomic/UI/Table/TableCategory/TableCategory';
import useSelect from '../../hooks/use-select';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1);',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '2rem',

    '@media screen and (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  tableTitle: {
    marginLeft: '1rem',
    margin: '0px !important',
  },
  titleEmty: {
    marginTop: '1rem',
    marginLeft: '5px',
  },
}));

export default function PageCategory() {
  const classes = useStyles();
  const dataCategory = useSelector((state) => state.category.dataCategory);

  let filtered = dataCategory;

  const searchQuery = useSelector((state) => state.search.searchQuery);

  if (searchQuery) {
    filtered = dataCategory.filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  const { data, setSortType } = useSelect(filtered);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectCategorySort setSortType={setSortType} />

        <div style={{ display: 'flex', marginTop: '10px' }}>
          <p className={classes.tableTitle}>Số lượng: </p>
          &nbsp;
          <p>{data.length}</p>
        </div>
      </div>
      <TableCategory dataTable={data} />
    </React.Fragment>
  );
}
