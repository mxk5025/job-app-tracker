import React from 'react';
import JobApp from './JobApp';

export default function JobList({jobs}) {

  return (
    <ul>
      { jobs.map(job =>
        <JobApp
          key={job.company + job.position}
          company={job.company}
          position={job.position}
          description={job.description}
          status={job.status}
        />
      )}
    </ul>
  );
}
