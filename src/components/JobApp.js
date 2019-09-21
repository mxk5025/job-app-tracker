import React from 'react';

export default function JobApp({company, position, description, status}) {

  return (
    <li>
      <ul>
        <li>{company}</li>
        <li>{position}</li>
        <li>{status}</li>
        <li>{description}</li>
      </ul>
    </li>
  );
}
