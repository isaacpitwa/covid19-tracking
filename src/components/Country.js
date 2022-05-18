import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetCountryDetails } from '../redux/countries/countries';

function Country(props) {
  const { name, confirmedCases } = props;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      className="link metric"
      onClick={() => {
        dispatch(resetCountryDetails());
        navigate(`/${params.date}/countries/${name}`);
      }}
      type="button"
      style={{ backgroundImage: 'url(\'/images/map.png\')' }}
    >
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
