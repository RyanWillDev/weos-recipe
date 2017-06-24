import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { pinkA200 as hotPink } from 'material-ui/styles/colors.js';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'row'
};

const LoadingSpinner = ({ size = 120, thickness = 9, color = hotPink }) => (
  <div style={styles}>
    <CircularProgress size={size} thickness={thickness}  color={color} />
  </div>
);

export default LoadingSpinner;
