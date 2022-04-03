import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const currencies = [
  {
    value: 'vi',
    label: 'Tiếng Việt',
  },
  {
    value: 'en',
    label: 'Tiếng Anh',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '10rem',

      '& label': {
        color: '#fff',
      },
    },
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
}));

export default function SelectLanguage() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState('vi');

  const handleChange = (event) => {
    setValue(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        select
        label={t('language')}
        value={value}
        onChange={handleChange}
        variant="filled"
        className={classes.text}
        color="primary"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
