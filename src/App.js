import React, { useState } from 'react';
import JobList from './components/JobList';
import './App.css';


// const mockApps = [
//   {
//     company: 'Apple',
//     position: 'Software Engineer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     status: 'Applied',
//     date: '09/21/19',
//   },
//   {
//     company: 'Google',
//     position: 'Software Engineer II',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     status: 'Rejected',
//     date: '09/21/19',
//   },
//   {
//     company: 'Facebook',
//     position: 'Software Engineer IV',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     status: 'Interview',
//     date: '09/21/19',
//   },
//   {
//     company: 'Lyft',
//     position: 'Senior Software Engineer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     status: 'Offer',
//     date: '09/21/19',
//   },
// ];

export default function App() {
  const [statusLists] = useState([
    'Applied', 'Rejected', 'Interview', 'Offer',
  ]);
  const [jobApps, setJobApps] = useState([]);

  const addJobApp = (jobApp) => {
    const copyJobApps = [...jobApps, jobApp];
    setJobApps(copyJobApps);
  };

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
          />
        ))}
      </div>
    </div>
  );
}
