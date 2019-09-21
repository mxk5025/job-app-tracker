import React from 'react';
import PropTypes from 'prop-types';
import JobApp from './JobApp';

export default function JobList({ jobs, status }) {
  return (
    <ul className="JobList">
      { jobs.filter((job) => job.status === status).map((job) => (
        <JobApp
          key={job.company + job.position}
          company={job.company}
          position={job.position}
          description={job.description}
          status={job.status}
          date={job.date}
        />
      ))}
    </ul>
  );
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  status: PropTypes.string.isRequired,
};
