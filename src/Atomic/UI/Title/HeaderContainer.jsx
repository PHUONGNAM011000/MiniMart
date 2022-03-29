import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Title from './Title';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '@media screen and (max-width: 500px)': {
      flexDirection: 'column',

      '& button': {
        minWidth: '250px !important',
        minHeight: '50px !important',
      },
    },
  },
}));

export default function HeaderCategoryContainer(props) {
  const classes = useStyles();

  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  return (
    <React.Fragment>
      <div className={classes.tableHeader}>
        <Title>{props.title}</Title>
        <Button
          variant="contained"
          color={isColorPrimary ? 'primary' : 'secondary'}
          onClick={props.addHandler}
          style={{
            boxShadow: 'none',
          }}
        >
          {props.buttonTitle}
        </Button>
      </div>
    </React.Fragment>
  );
}
