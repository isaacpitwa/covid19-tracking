import React from 'react';
import { useNavigate } from 'react-router-dom';

function Metric(props) {
  const { date, confirmedCases } = props;
  const navigate = useNavigate();

  return (
    <button className="link metric" onClick={() => { navigate(`/${date}/countries`); }} type="button" style={{ backgroundImage: 'url(images/map.png)' }}>
      <div>
        <h4>{date}</h4>
        <p>
          {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Cases
        </p>
      </div>
    </button>
  );
}
export default Metric;
