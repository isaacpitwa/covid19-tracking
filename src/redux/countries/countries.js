import ApiClient from '../../data/apiClient';

const FETCHED_COUNTRIES = 'covid19traking/countries/FETCHED_COUNTRIES';
const FETCHING_COUNTRIES = 'covid19traking/countries/FETCHING_COUNTRIES';

export function fetching() {
  return {
    type: FETCHING_COUNTRIES,
  };
}

export function fetchedCountries(countries) {
  console.log(countries);
  return {
    type: FETCHED_COUNTRIES,
    countries,
  };
}

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchCountries();
    dispatch(fetchedCountries(response));
  }, 1000);
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHING_COUNTRIES:
      return 'Under construction';
    case FETCHED_COUNTRIES:
      return 'Under construction';
    default:
      return state;
  }
}
