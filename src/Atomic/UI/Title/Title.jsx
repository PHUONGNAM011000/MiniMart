import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export default function Title(props) {
  const isColorPrimary = useSelector(
    (state) => state.customTheme.isColorPrimary
  );

  return (
    <Typography
      variant="h5"
      color={isColorPrimary ? 'primary' : 'secondary'}
      gutterBottom
      style={{
        paddingRight: '1rem',
        minWidth: 'max-content',
        paddingBottom: '1rem',
        marginBottom: '0',
      }}
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
