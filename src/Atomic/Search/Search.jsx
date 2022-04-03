/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';

export default function Search({ onSearchChange, value, title }) {
  const { t } = useTranslation();

  return (
    <TextField
      label={t('labelSearchCategory')}
      placeholder={`${title} . . .`}
      fullWidth={true}
      style={{
        maxWidth: '550px',
        background: '#fff',
        borderRadius: '4px',
      }}
      color="primary"
      type="text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      multiline
      variant="outlined"
      value={value}
      onChange={(e) => onSearchChange(e)}
    />
  );
}
