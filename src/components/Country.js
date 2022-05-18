import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Country(props) {
  const { name, confirmedCases } = props;
  const params = useParams();
  const navigate = useNavigate();

  return (
    <button className="link metric" onClick={() => { navigate(`/${params.date}/countries/${name}`, { replace: true }); }} type="button" style={{ backgroundImage: 'url(\'/images/map.png\')' }}>
      <div>
        <h4>{name}</h4>
        <p>
          {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Cases
        </p>
      </div>
    </button>
  );
}
export default Country;
