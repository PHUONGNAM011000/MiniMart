import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,

    '@media screen and (max-width: 450px)': {
      paddingBottom: '1rem',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectProductSort({ setSortType, title }) {
  const classes = useStyles();
  const [select, setSelect] = React.useState('');
  const { t } = useTranslation();

  const handleChange = (event) => {
    setSortType(event.target.value);
    setSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel color="primary">{title}</InputLabel>
        <Select
          value={select}
          onChange={handleChange}
          label="select"
          color="primary"
          style={{
            backgroundColor: '#fff',
            minWidth: '250px',
          }}
        >
          <MenuItem value="priceIncrease">{t('amountSortSelectAsc')}</MenuItem>
          <MenuItem value="priceDecrease">{t('amountSortSelectDesc')}</MenuItem>
          <MenuItem value="nameIncrease">{t('nameSortSelectAsc')}</MenuItem>
          <MenuItem value="nameDecrease">{t('nameSortSelectDesc')}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
