import ApiClient from '../../data/apiClient';

const FETCHED_METRICS = 'covid19traking/metrics/FETCHED_METRICS';
const FETCHING_METRICS = 'covid19traking/metrics/FETCHING_METRICS';

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
const fetching = () => ({
  type: FETCHING_METRICS,
});

export const fetchMetrics = (dateFrom, dateTo) => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchMetrics(dateFrom, dateTo);
    dispatch(fetchedMetrics(response));
  }, 100);
};

export default function reducer(state = [], action = []) {
  switch (action.type) {
    case FETCHED_METRICS:
      return action.metrics;
    case FETCHING_METRICS:
      return [];
    default:
      return state;
  }
}
