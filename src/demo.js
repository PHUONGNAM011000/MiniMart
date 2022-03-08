import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Demo = (props) => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.children}
      </Typography>
    </>
  );
};

Demo.propTypes = {
  children: PropTypes.node,
};

export default Demo;
