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
  const [message, setMessage] = useState('');

  const getDate = useCallback(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }, []);

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
    if (company.length > 30 || position.length > 30) {
      setMessage('Invalid company or position length.');
    }
    if (!inputPattern.test(company)
        || !inputPattern.test(position)
        || !areaPattern.test(description)) {
      setMessage('Invalid input found.');
      return;
    }
    addJobApp({
      company,
      position,
      description,
      status,
      date: getDate(),
    });
    setShowForm(false);
    setMessage('');
  }, [addJobApp, getDate, setMessage, setShowForm, company,
    position, description, status]);

  return (
    <div className="CreateForm">
      { message.length > 0
        && (
          <ErrorMessage value={message} />
        )}
      <form onSubmit={handleSubmit}>
        <div className="InputContainer">
          Company
          <input
            type="text"
            name="Company"
            maxLength="30"
            value={company}
            onChange={handleCompany}
          />
        </div>
        <div className="InputContainer">
          Position
          <input
            type="text"
            name="Position"
            maxLength="30"
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
