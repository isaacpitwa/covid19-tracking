import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/countries/countries';
import Country from './Country';

function Countries() {
  const dispatch = useDispatch();
  const params = useParams();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries(params.date));
  }, []);
  return (
    <ul>
      { countries ? countries.sort(() => Math.random() - 0.5).map((country) => <Country key={country.id} name={country.name} confirmedCases={country.today_new_confirmed} />) : 'Loading'}
    </ul>
  );
}
export default Countries;
