import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../redux/countries/countries';

function Metric(props) {
  const { date, confirmedCases } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      className="link metric"
      onClick={() => {
        dispatch(reset());
        navigate(`/${date}/countries`);
      }}
      type="button"
      style={{ backgroundImage: 'url(images/map.png)' }}
    >
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

Metric.propTypes = {
  date: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};
export default Metric;
