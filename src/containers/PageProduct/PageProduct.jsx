import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import useSelect from '../../hooks/use-select';
import SelectProductSort from '../../Atomic/UI/Select/SelectProductSort';
import TableProduct from '../../Atomic/UI/Table/TableProduct/TableProduct';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
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
}));

export default function PageProduct() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dataProduct = useSelector((state) => state.product.dataProduct);

  const searchQuery = useSelector((state) => state.search.searchQuery);

  let filtered = dataProduct;

  if (searchQuery) {
    filtered = dataProduct.filter((item) =>
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }
  const { data, setSortType } = useSelect(filtered, 'amount');

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <SelectProductSort title={t('titleSort')} setSortType={setSortType} />

        <div className={classes.tableTitle}>
          <p>{t('amount')}: </p>
          &nbsp;
          <p>{data.length}</p>
        </div>
      </div>
      <TableProduct dataTable={data} />
    </React.Fragment>
  );
}
