import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Title from '../../Atomic/Title/Title';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tableTitle: {
    marginLeft: '1rem',
  },
}));

export default function PageCategory() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <Title>Danh mục Sản Phẩm</Title>
        <div className={classes.tableHeader}>
          <Button variant="contained" color="primary">
            Thêm Danh Mục
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
