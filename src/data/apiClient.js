export default class ApiClient {
  static COUNTRIES_URL = 'https://api.covid19tracking.narrativa.com/api/2022-03-10';

  static fetchCountries = async () => {
    const response = await fetch(this.COUNTRIES_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  };

  static fetchRegions = async (date, country) => {
    const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  };
}
