import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoingBack.css';

function GoingBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-container">
      <button className="back-btn" type="button" onClick={goBack}>
        <h3>Go Back</h3>
      </button>
    </div>
  );
}

export default GoingBack;
