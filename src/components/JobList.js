import React from 'react';
import JobApp from './JobApp';

export default function JobList({jobs, status}) {

  return (
    <ul>
      { jobs.filter(job => job.status === status).map(job =>
        <JobApp
          key={job.company + job.position}
          company={job.company}
          position={job.position}
          description={job.description}
          status={job.status}
          date={job.date}
        />
      )}
    </ul>
  );
}
