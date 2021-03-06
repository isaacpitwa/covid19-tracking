import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMetrics } from '../redux/metrics/Metrics';
import Metric from './Metric';
import SelectDate from './SelectDate';

function Metrics() {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics);

  useEffect(() => {
    if (metrics.length === 0) {
      dispatch(fetchMetrics('2022-03-10', '2022-03-17'));
    }
  }, [dispatch]);
  return (
    <>
      <SelectDate />
      <h4 className="home-heading">Stats by Date</h4>
      <ul className="metrics-list">
        { metrics.length > 0 ? metrics.map((metric) => <Metric key={metric.date} date={metric.date} confirmedCases={metric.todayConfirmed} />) : 'Loading...'}
      </ul>
    </>
  );
}
export default Metrics;
