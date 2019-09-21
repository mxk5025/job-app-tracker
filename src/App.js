import React, { useState } from 'react';
import JobList from './components/JobList';
import CreateForm from './components/CreateForm';
import CreateButton from './components/CreateButton';
import './App.css';


const mockApps = [
  {
    company: 'Apple',
    position: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Applied',
    date: '09/21/19',
  },
  {
    company: 'Google',
    position: 'Software Engineer II',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Rejected',
    date: '09/21/19',
  },
  {
    company: 'Facebook',
    position: 'Software Engineer IV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Interview',
    date: '09/21/19',
  },
  {
    company: 'Lyft',
    position: 'Senior Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Offer',
    date: '09/21/19',
  },
];

export default function App() {
  const [statusLists] = useState([
    'Applied', 'Rejected', 'Interview', 'Offer',
  ]);

  return (
    <div className="App">
      <CreateButton />
      <CreateForm />
      <div className="status-list-container">
        { statusLists.map((statusList) => (
          <JobList
            key={statusList}
            jobs={mockApps}
            status={statusList}
          />
        ))}
      </div>
    </div>
  );
}
