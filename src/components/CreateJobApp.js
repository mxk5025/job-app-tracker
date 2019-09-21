import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreateForm from './CreateForm';

export default function CreateJobApp({ status, addJobApp }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button type="button" onClick={(e) => setShowForm(!showForm)}>
        Create Form
      </button>
      { showForm
        && (
          <CreateForm
            status={status}
            addJobApp={addJobApp}
            setShowForm={setShowForm}
          />
        )}
    </div>
  );
}

CreateJobApp.propTypes = {
  status: PropTypes.string.isRequired,
  addJobApp: PropTypes.func.isRequired,
};
