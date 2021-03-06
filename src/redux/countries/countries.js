import ApiClient from '../../data/apiClient';

const FETCHED_COUNTRIES = 'covid19traking/countries/FETCHED_COUNTRIES';
const SEARCH_COUNTRY = 'covid19traking/countries/SEARCH_COUNTRY';
const SORT_COUNTRIES = 'covid19traking/countries/SORT_COUNTRIES';

const FETCHED_REGIONS = 'covid19traking/countries/FETCHED_REGIONS';
const RESET = 'covid19traking/countries/RESET';
const RESET_COUNTRY_DETAILS = 'covid19traking/countries/RESET_COUNTRY_DETAILS';

export function fetchedCountries(apiResponse, date) {
  const formattedCountries = Object.entries(apiResponse.dates[date].countries).map(
    ([key, value]) => ({ ...value, country: key }),
  );
  return {
    type: FETCHED_COUNTRIES,
    countries: formattedCountries,
  };
}

export const fetchCountries = (date) => async (dispatch) => {
  setTimeout(async () => {
    const response = await ApiClient.fetchCountries(date);
    dispatch(fetchedCountries(response, date));
  }, 100);
};

export function fetchedRegions(apiResponse, requestData) {
  return {
    type: FETCHED_REGIONS,
    countryDetails: apiResponse.dates[requestData.date].countries[requestData.country],
  };
}

export const fetchRegions = (date, country) => async (dispatch) => {
  setTimeout(async () => {
    const response = await ApiClient.fetchRegions(date, country);
    dispatch(fetchedRegions(response, { date, country }));
  }, 100);
};

export const reset = () => ({
  type: RESET,
});

export const searchCountry = (searchTxt) => ({
  type: SEARCH_COUNTRY,
  searchTxt,
});

export const sortCountries = (order) => ({
  type: SORT_COUNTRIES,
  order,
});

export const resetCountryDetails = () => ({
  type: RESET_COUNTRY_DETAILS,
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHED_COUNTRIES:
      return { ...state, countries: action.countries };
    case SEARCH_COUNTRY:
      return {
        ...state,
        filteredCountries: state.countries.filter(
          (country) => country.name.toLowerCase().startsWith(action.searchTxt.toLowerCase()),
        ),
        filter: action.searchTxt,
      };
    case SORT_COUNTRIES:
      if (action.order === 'asc') {
        return {
          ...state,
          filteredCountries: state.countries.sort(
            (current, next) => current.today_new_confirmed - next.today_new_confirmed,
          ),
          filter: true,
        };
      }
      if (action.order === 'desc') {
        return {
          ...state,
          filteredCountries: state.countries.sort(
            (current, next) => current.today_new_confirmed - next.today_new_confirmed,
          ).reverse(),
          filter: true,
        };
      }
      if (action.order === 'alpha-asc') {
        return {
          ...state,
          filteredCountries: state.countries.sort(
            (current, next) => current.name.localeCompare(next.name),
          ),
          filter: true,
        };
      }
      return {
        ...state,
        filteredCountries: state.countries,
        filter: false,
      };

    case FETCHED_REGIONS:
      return { ...state, countryDetails: action.countryDetails };
    case RESET_COUNTRY_DETAILS:
      return { ...state, countryDetails: undefined };
    case RESET:
      return { };
    default:
      return state;
  }
}
