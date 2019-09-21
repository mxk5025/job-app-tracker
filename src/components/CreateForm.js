import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import './CreateForm.css';

const inputPattern = RegExp('[a-zA-Z0-9&,.]+');
const areaPattern = RegExp('[a-zA-Z0-9&,.\\n]+');

export default function CreateForm({ status, addJobApp, setShowForm }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);

  const handleCompany = useCallback((e) => {
    setCompany(e.target.value);
  }, []);

  const handlePosition = useCallback((e) => {
    setPosition(e.target.value);
  }, []);

  const handleDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!inputPattern.test(company)
        || !inputPattern.test(position)
        || !areaPattern.test(description)) {
      setShowError(true);
      return;
    }
    addJobApp({
      company,
      position,
      description,
      status,
      date: '09/21/19',
    });
    setShowForm(false);
    setShowError(false);
  }, [addJobApp, setShowError, setShowForm, company,
    position, description, status]);

  return (
    <div className="CreateForm">
      { showError
        && (
          <ErrorMessage value="Invalid job application." />
        )}
      <form onSubmit={handleSubmit}>
        <div className="InputContainer">
          Company
          <input
            type="text"
            name="Company"
            value={company}
            onChange={handleCompany}
          />
        </div>
        <div className="InputContainer">
          Position
          <input
            type="text"
            name="Position"
            value={position}
            onChange={handlePosition}
          />
        </div>
        <div className="DescriptionContainer">
          Description
          <textarea
            rows="6"
            type="text"
            name="Description"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

CreateForm.propTypes = {
  status: PropTypes.string.isRequired,
  addJobApp: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
};
