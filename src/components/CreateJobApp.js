import React, { useState } from 'react';
import CreateForm from './CreateForm';

export default function CreateJobApp() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button type="button" onClick={(e) => setShowForm(!showForm)}>
        Create Form
      </button>
      { showForm &&
        <CreateForm />
      }
    </div>
  );
}
