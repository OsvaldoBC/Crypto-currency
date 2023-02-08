import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoingBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        <h3>Go Back</h3>
      </button>
    </div>
  );
}

export default GoingBack;
