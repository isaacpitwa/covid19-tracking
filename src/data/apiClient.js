export default class ApiClient {
  static fetchMetrics = async (dateFrom, dateTo) => {
    const response = await fetch(`https://api.covid19tracking.narrativa.com/api?date_from=${dateFrom}&date_to=${dateTo}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  };

  static fetchCountries = async (date) => {
    const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`, {
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
