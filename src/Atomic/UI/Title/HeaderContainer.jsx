import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Title from './Title';
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '@media screen and (max-width: 500px)': {
      flexDirection: 'column',
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
          <span style={{ height: '24px', paddingRight: '0.5rem' }}>
            <AddIcon />
          </span>
          <span style={{ height: '20px' }}>{props.buttonTitle}</span>
        </Button>
      </div>
    </React.Fragment>
  );
}
