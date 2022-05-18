import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMetrics } from '../redux/metrics/Metrics';

function SelectDate() {
  const [inputDates, setInputDates] = useState({
    dateFrom: '2022-03-10',
    dateTo: '2022-03-17',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputDates({
      ...inputDates,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(fetchMetrics(inputDates.dateFrom, inputDates.dateTo));
  };
  return (
    <div>
      <h3>Select Date Range</h3>
      <div>
        <input type="date" name="dateFrom" onChange={onChange} value={inputDates.dateFrom} />
        <input type="date" name="dateTo" onChange={onChange} value={inputDates.dateTo} />
        <button type="button" onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
}
export default SelectDate;
