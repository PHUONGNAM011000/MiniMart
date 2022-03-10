import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Title from '../../Atomic/Title/Title';
import { useDispatch } from 'react-redux';
import { ActionsModal } from '../../store/modalSlice';

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
  const dispatch = useDispatch();

  const AddCategoryHandler = () => {
    dispatch(ActionsModal.showAddCategory());
  };

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <Title>Danh mục Sản Phẩm</Title>
        <div className={classes.tableHeader}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => AddCategoryHandler()}
          >
            Thêm Danh Mục
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
