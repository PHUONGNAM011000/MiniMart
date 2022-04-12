import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsSelect } from '../../../store/selectSlice';

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

export default function SelectCategorySort({ title }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const valueSelect = useSelector((state) => state.select.valueSelect);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(ActionsSelect.onChange(e.target.value));
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel color="primary">{title}</InputLabel>
        <Select
          value={valueSelect}
          onChange={handleChange}
          label="select"
          color="primary"
          style={{
            backgroundColor: '#fff',
            minWidth: '250px',
          }}
        >
          <MenuItem value="nameIncrease">{t('nameSortSelectAsc')}</MenuItem>
          <MenuItem value="nameDecrease">{t('nameSortSelectDesc')}</MenuItem>
          <MenuItem value="idIncrease">{t('idSortSelectAsc')}</MenuItem>
          <MenuItem value="idDecrease">{t('idSortSelectDesc')}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
