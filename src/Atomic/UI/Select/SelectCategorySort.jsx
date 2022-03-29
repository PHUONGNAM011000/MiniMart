import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom: '1rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectCategorySort({ setSortType }) {
  const classes = useStyles();
  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    setSortType(event.target.value);
    setSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel color="primary">Sắp Xếp</InputLabel>
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
          <MenuItem value="">
            <em>Thu dọn</em>
          </MenuItem>
          <MenuItem value="priceIncrease">Id tăng dần</MenuItem>
          <MenuItem value="priceDecrease">Id giảm dần</MenuItem>
          <MenuItem value="nameIncrease">Tên A-Z</MenuItem>
          <MenuItem value="nameDecrease">Tên Z-A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
