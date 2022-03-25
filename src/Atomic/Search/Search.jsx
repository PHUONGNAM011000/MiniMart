/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
  return (
    <TextField
      // error={checkMass}
      // helperText={checkMass && 'Bạn chưa nhập khối lượng'}
      placeholder="Tìm kiếm sản phẩm . . ."
      style={{
        maxWidth: '500px',
      }}
      color="primary"
      type="text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        // readOnly: showInputProduct,
      }}
      variant="outlined"
      // value={productModal.mass || ''}
      // onChange={(e) => MassProductChangeHandler(e)}
    />
  );
}
