import React, { useState } from 'react';
import JobList from './components/JobList';
import CreateForm from './components/CreateForm';
import CreateButton from './components/CreateButton';
import './App.css';



const mockApps = [
  {
    company: "Apple",
    position: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Applied",
    date: "09/21/19",
  },
  {
    company: "Google",
    position: "Software Engineer II",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Denied",
    date: "09/21/19",
  },
  {
    company: "Facebook",
    position: "Software Engineer IV",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Interview",
    date: "09/21/19",
  },
  {
    company: "Lyft",
    position: "Senior Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Offer",
    date: "09/21/19",
  }
];

export default function App() {
  const [statusLists] = useState([
    "Applied", "Denied", "Interview", "Offer"
  ]);

  return (
    <div className="App">
      <CreateForm/>
      <CreateButton/>
      { statusLists.map(statusList =>
          <JobList
            key={statusList}
            jobs={mockApps}
            status={statusList}
          />
      )}
    </div>
  );
}
