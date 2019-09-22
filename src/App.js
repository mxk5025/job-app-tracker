import React, { useState, useCallback } from 'react';
import JobList from './components/JobList';
import './App.css';

export default function App() {
  const [statusLists] = useState([
    'Applied', 'Rejected', 'Interview', 'Offer',
  ]);
  const [jobApps, setJobApps] = useState([]);

  const addJobApp = useCallback((jobApp) => {
    const copyJobApps = [...jobApps, jobApp];
    setJobApps(copyJobApps);
  }, [jobApps, setJobApps]);

  const removeJobApp = useCallback((jobApp) => {
    const jobsCopy = [...jobApps];
    for (let i = jobsCopy.length - 1; i >= 0; i--) {
      const j = jobsCopy[i];
      if (j === jobApp) {
        jobsCopy.splice(i, 1);
        break;
      }
    }
    setJobApps(jobsCopy);
  }, [jobApps]);

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <div className="status-list-container">
        { statusLists.map((statusList) => (
          <JobList
            key={statusList}
            jobs={jobApps}
            status={statusList}
            addJobApp={addJobApp}
            removeJobApp={removeJobApp}
          />
        ))}
      </div>
    </div>
  );
}
