import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Country from './Country';

function Metrics() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <ul>
      { countries ? countries.map((country) => <Country key={country.id} name={country.name_es} confirmedCases={country.today_new_confirmed} />) : 'Loading'}
    </ul>
  );
}
export default Metrics;
