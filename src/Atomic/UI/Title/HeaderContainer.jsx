import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Title from './Title';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // '& button': {
    //   '@media screen and (max-width: 768px)': {
    //     display: 'none',
    //   },
    // },
  },
  tableTitle: {
    marginLeft: '1rem',
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
        <div className={classes.tableHeader}>
          <Button
            variant="contained"
            color={isColorPrimary ? 'primary' : 'secondary'}
            onClick={props.addHandler}
          >
            {props.buttonTitle}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
