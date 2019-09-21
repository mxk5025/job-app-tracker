import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './JobApp.css';

export default function JobApp({
  company, position, description, status, date,
}) {
  const [color] = useState(
    status === 'Applied' ? '#c74e9f'
      : status === 'Rejected' ? '#ff2e43'
        : status === 'Interview' ? '#c9c300'
          : status === 'Offer' ? '#88e234' : '#000'
  );
  return (
    <li className="JobApp" style={{ backgroundColor: color }}>
      <ul>
        <li>
          <b>Company</b>
          <span id="tabbed">{company}</span>
        </li>
        <li>
          <b>Position</b>
          <span id="tabbed">{position}</span>
        </li>
        <li>{date}</li>
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
