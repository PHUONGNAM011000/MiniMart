import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import SelectProductSort from '../../Atomic/UI/Select/SelectProductSort';
import TableProduct from '../../Atomic/UI/Table/TableProduct/TableProduct';
import { useTranslation } from 'react-i18next';
import CardProduct from '../../Atomic/UI/Card/CardProduct';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '2rem',

    '@media screen and (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  tableTitle: {
    display: 'flex',
    fontWeight: '600 !important',
    color: '#000 !important',
  },
  titleEmty: {
    marginTop: '1rem',
    marginLeft: '5px',
  },
  textTable: {
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    padding: '1rem 0 !important',
    paddingRight: '1.5rem !important',
  },
  textTableAmount: {
    fontWeight: 'bold',
    padding: '1rem 0 !important',
    textAlign: 'right',
    paddingRight: '1.5rem !important',
    fontSize: '1rem !important',
  },
  centerText: {
    fontWeight: 'bold',
    padding: '1rem 0 !important',
    textAlign: 'center',
    fontSize: '1rem !important',
  },
  boldLastTable: {
    fontWeight: 'bold',
    padding: '0 !important',
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1);',
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

export default function PageProduct() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dataProduct = useSelector((state) => state.product.dataProduct);
  const valueSelect = useSelector((state) => state.select.valueSelect);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  let filtered = dataProduct;

  if (searchQuery) {
    filtered = dataProduct.filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  if (valueSelect === 'nameIncrease')
    filtered = _.orderBy(filtered, ['name'], ['asc']);
  else if (valueSelect === 'nameDecrease')
    filtered = _.orderBy(filtered, ['name'], ['desc']);
  else if (valueSelect === 'amountIncrease')
    filtered = _.orderBy(filtered, ['amount'], ['asc']);
  else if (valueSelect === 'amountDecrease')
    filtered = _.orderBy(filtered, ['amount'], ['desc']);

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectProductSort title={t('titleSort')} />

        <div className={classes.tableTitle}>
          <p>{t('amount')}: </p>
          &nbsp;
          <p>{filtered.length}</p>
        </div>
      </div>
      <TableProduct dataTable={filtered} />
      <CardProduct dataTable={filtered} />
      {filtered.length === 0 && (
        <h4 className={classes.titleCardEmpty}>
          <p style={{ marginRight: '0.5rem' }}>{t('titleEmpty')}</p>
          <SentimentVeryDissatisfiedIcon />
        </h4>
      )}
    </React.Fragment>
  );
}
