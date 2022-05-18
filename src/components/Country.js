import React from 'react';
import { Link } from 'react-router-dom';

function Country(props) {
  const { name, confirmedCases } = props;
  return (
    <Link to={`/2022-03-10/countries/${name}`}>
      {' '}
      {name}
      :
      {confirmedCases}

    </Link>
  );
}
export default Country;
