import ApiClient from '../../data/apiClient';

const FETCHED_METRICS = 'covid19traking/metrics/FETCHED_METRICS';

export function fetchedMetrics(apiResponse) {
  const formattedMetrics = Object.entries(apiResponse.dates).map(
    ([key, value]) => (
      {
        date: key,
        todayConfirmed: Object.entries(value.countries).map(
          ([key, value]) => (value.today_new_confirmed),
        ).reduce((a, b) => a + b, 0),
      }),
  );
  return {
    type: FETCHED_METRICS,
    metrics: formattedMetrics,
  };
}

export const fetchMetrics = (dateFrom, dateTo) => async (dispatch) => {
  setTimeout(async () => {
    const response = await ApiClient.fetchMetrics(dateFrom, dateTo);
    dispatch(fetchedMetrics(response));
  }, 100);
};

export default function reducer(state = [], action = []) {
  switch (action.type) {
    case FETCHED_METRICS:
      return action.metrics;
    default:
      return state;
  }
}
