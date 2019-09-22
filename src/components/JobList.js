import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import CreateJobApp from './CreateJobApp';
import JobApp from './JobApp';
import './JobList.css';

export default function JobList({
  jobs, status, addJobApp, removeJobApp,
}) {
  return (
    <div className="JobList">
      <CreateJobApp status={status} addJobApp={addJobApp} />
      <ul>
        { jobs.filter((job) => job.status === status).map((job) => (
          <div className="job-app-container" key={job.company + job.position}>
            <IconButton
              id="clear-button"
              onClick={(e) => { removeJobApp(job); }}
            >
              <Clear />
            </IconButton>
            <JobApp
              company={job.company}
              position={job.position}
              description={job.description}
              status={job.status}
              date={job.date}
            />
          </div>
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
  removeJobApp: PropTypes.func.isRequired,
};
