import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Region(props) {
  const { name, confirmedCases } = props;
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="region">
      <h4>{name}</h4>
      <p>
        {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        {' '}
        Cases
      </p>
    </div>
  );
}
export default Region;
