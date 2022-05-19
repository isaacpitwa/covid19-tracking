import React from 'react';
import PropTypes from 'prop-types';

function Region(props) {
  const { name, confirmedCases } = props;

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

Region.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Region;
