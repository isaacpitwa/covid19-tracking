import React from 'react';
import { Link } from 'react-router-dom';

function Metric(props) {
  const { date, confirmedCases } = props;
  return (
    <Link to={`/${date}/countries`} className="link metric">
      {`${date} - ${confirmedCases}`}
    </Link>
  );
}
export default Metric;
