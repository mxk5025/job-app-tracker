import React from 'react';
import './CreateForm.css';

export default function CreateForm() {
  return (
    <div className="CreateForm">
      <form>
        <div className="InputContainer">
          Company
          <input type="text" name="Company" />
        </div>
        <div className="InputContainer">
          Position
          <input type="text" name="Position" />
        </div>
        <div className="DescriptionContainer">
          Description
          <input type="text" name="Description" />
        </div>
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
