import ApiClient from '../../data/apiClient';

const FETCHED_COUNTRIES = 'covid19traking/countries/FETCHED_COUNTRIES';
const FETCHING_COUNTRIES = 'covid19traking/countries/FETCHING_COUNTRIES';

export function fetching() {
  return {
    type: FETCHING_COUNTRIES,
  };
}

export function fetchedCountries(apiResponse) {
  const formattedCountries = Object.entries(apiResponse.dates['2022-03-10'].countries).map(([key, value]) => ({ ...value, country: key }));
  return {
    type: FETCHED_COUNTRIES,
    countries: formattedCountries,
  };
}

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchCountries();
    dispatch(fetchedCountries(response));
  }, 1000);
};

export default function reducer(state = [], action = { countries: [] }) {
  switch (action.type) {
    case FETCHING_COUNTRIES:
      return { ...state, fetching: true };
    case FETCHED_COUNTRIES:
      return { ...state, fetching: false, countries: action.countries };
    default:
      return state;
  }
}
