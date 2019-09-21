import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ value }) {
  return (
    <p style={{ color: '#fd4659' }}>{value}</p>
  );
}

ErrorMessage.propTypes = {
  value: PropTypes.string.isRequired,
};
