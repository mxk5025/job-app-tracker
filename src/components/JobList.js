import React from 'react';
import PropTypes from 'prop-types';
import JobApp from './JobApp';
import './JobList.css';
import CreateJobApp from './CreateJobApp';

export default function JobList({ jobs, status, addJobApp }) {
  return (
    <div className="JobList">
      <h2>{status}</h2>
      <CreateJobApp status={status} addJobApp={addJobApp} />
      <ul>
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
    </div>
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
  addJobApp: PropTypes.func.isRequired,
};
