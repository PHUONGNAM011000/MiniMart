/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsSearch } from '../../store/searchSlice';

export default function Search({ title }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);

  const onSearchChange = (e) => {
    dispatch(ActionsSearch.searchChanged(e.target.value));
  };

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
      value={searchQuery}
      onChange={(e) => onSearchChange(e)}
    />
  );
}
