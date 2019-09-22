import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import CreateForm from './CreateForm';
import './CreateJobApp.css';

export default function CreateJobApp({ status, addJobApp }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="CreateJobApp">
      <span id="status-heading">{status}</span>
      <IconButton
        id="add-button"
        size="small"
        onClick={(e) => setShowForm(!showForm)}
      >
        { !showForm
          && <Add />}
        { showForm
          && <Remove />}
      </IconButton>
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
