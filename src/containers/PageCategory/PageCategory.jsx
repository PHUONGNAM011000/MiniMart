import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import SelectCategorySort from '../../Atomic/UI/Select/SelectCategorySort';
import TableCategory from '../../Atomic/UI/Table/TableCategory/TableCategory';
import { useTranslation } from 'react-i18next';
import CardCategory from '../../Atomic/UI/Card/CardCategory';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1);',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '64px',

    '@media screen and (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '24px',
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
  titleCardEmpty: {
    backgroundColor: '#fff',
    padding: '0.5rem',
    borderRadius: '5px',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',

    '@media screen and (min-width: 800px)': {
      display: 'none',
    },
  },
}));

export default function PageCategory() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dataCategory = useSelector((state) => state.category.dataCategory);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const valueSelect = useSelector((state) => state.select.valueSelect);

  let filtered = dataCategory;

  if (searchQuery) {
    filtered = [...filtered].filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  if (valueSelect === 'nameIncrease')
    filtered = _.orderBy(filtered, ['name'], ['asc']);
  else if (valueSelect === 'nameDecrease')
    filtered = _.orderBy(filtered, ['name'], ['desc']);
  else if (valueSelect === 'idIncrease')
    filtered = _.orderBy(filtered, ['id'], ['asc']);
  else if (valueSelect === 'idDecrease')
    filtered = _.orderBy(filtered, ['id'], ['desc']);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectCategorySort title={t('titleSort')} />

        <div style={{ display: 'flex' }}>
          <p className={classes.tableTitle}>{t('amount')}: </p>
          &nbsp;
          <p>{filtered.length}</p>
        </div>
      </div>
      <TableCategory dataTable={filtered} />
      <CardCategory dataTable={filtered} />
      {filtered.length === 0 && (
        <h4 className={classes.titleCardEmpty}>
          <p style={{ marginRight: '0.5rem' }}>{t('titleEmpty')}</p>
          <SentimentVeryDissatisfiedIcon />
        </h4>
      )}
    </React.Fragment>
  );
}
