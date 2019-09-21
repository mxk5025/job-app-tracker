import React from 'react';
import JobApp from './JobApp';

export default function JobList({jobs}) {

  return (
    <ul>
      { jobs.map(job =>
        <JobApp
          company={job.company}
          position={job.position}
          description={job.description}
          status={job.status}
        />
      )}
    </ul>
  );
}
