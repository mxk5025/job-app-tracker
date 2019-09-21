import React from 'react';
import PropTypes from 'prop-types';

export default function JobApp({
  company, position, description, status, date,
}) {
  return (
    <li>
      <ul>
        <li>{company}</li>
        <li>{position}</li>
        <li>{date}</li>
        <li>{status}</li>
        <li>{description}</li>
      </ul>
    </li>
  );
}

JobApp.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
