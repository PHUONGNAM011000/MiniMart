import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: '0.5rem',
    minWidth: 120,
  },
}));

export default function SelectLanguage({ selectChangeHandler }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel style={{ color: '#fff' }}>{t('language')}</InputLabel>
        <Select
          native
          defaultValue=""
          onChange={selectChangeHandler}
          style={{
            color: '#fff',
            backgroundColor: 'rgba(0, 0,0, 0.2)',
            paddingLeft: '0.8rem',
          }}
        >
          <option value="vi">Vietnamese</option>
          <option value="en">English</option>
        </Select>
      </FormControl>
    </div>
  );
}
