/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectCategory({
  data,
  value,
  defaultValue,
  showInputProduct,
  label,
  onChange,
}) {
  return (
    <>
      <Autocomplete
        value={value || defaultValue}
        id="controllable-states-demo"
        onChange={onChange}
        disabled={showInputProduct}
        options={data}
        fullWidth={true}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </>
  );
}
