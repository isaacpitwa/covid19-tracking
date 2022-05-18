import ApiClient from '../../data/apiClient';

const FETCHED_COUNTRIES = 'covid19traking/countries/FETCHED_COUNTRIES';
const FETCHING_COUNTRIES = 'covid19traking/countries/FETCHING_COUNTRIES';

const FETCHED_REGIONS = 'covid19traking/countries/FETCHED_REGIONS';

export function fetching() {
  return {
    type: FETCHING_COUNTRIES,
  };
}

export function fetchedCountries(apiResponse, date) {
  const formattedCountries = Object.entries(apiResponse.dates[date].countries).map(([key, value]) => ({ ...value, country: key }));
  return {
    type: FETCHED_COUNTRIES,
    countries: formattedCountries,
  };
}

export const fetchCountries = (date) => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchCountries(date);
    dispatch(fetchedCountries(response, date));
  }, 1000);
};

export function fetchedRegions(apiResponse, requestData) {
  return {
    type: FETCHED_REGIONS,
    countryDetails: apiResponse.dates[requestData.date].countries[requestData.country],
  };
}

export const fetchRegions = (date, country) => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchRegions(date, country);
    dispatch(fetchedRegions(response, { date, country }));
  }, 1000);
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHING_COUNTRIES:
      return { ...state, fetching: true };
    case FETCHED_COUNTRIES:
      return { ...state, fetching: false, countries: action.countries };
    case FETCHED_REGIONS:
      return { ...state, countryDetails: action.countryDetails };
    default:
      return state;
  }
}
