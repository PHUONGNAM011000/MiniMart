/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search({ onSearchChange, value, title }) {
  return (
    <TextField
      placeholder={`${title} . . .`}
      fullWidth={true}
      style={{
        minWidth: '250px',
        maxWidth: '500px',
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
      variant="outlined"
      value={value}
      onChange={(e) => onSearchChange(e)}
    />
  );
}
