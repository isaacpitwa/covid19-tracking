/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { fetchCountries } from '../redux/countries/countries';
import Country from './Country';
import Filter from './Filter';

function Countries() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { countries, filteredCountries, filter } = useSelector((state) => state.countries);
  useEffect(() => {
    if (countries === undefined || countries.length === 0) {
      dispatch(fetchCountries(params.date));
    }
  }, [dispatch]);
  return (
    <>
      <nav className="page-heading">
        <div className="back">
          <button onClick={() => { navigate('/'); }} type="button">
            <p className="button-txt">
              <IoIosArrowBack size={18} />
              <span>{params.date}</span>
            </p>
          </button>
        </div>
        <h4 className="page-title">Countries</h4>
        <div className="space-div" />
      </nav>
      <Filter />
      <ul className="countries-list">
        { countries ? filter ? filteredCountries.map((country) => <Country key={country.id} name={country.name} confirmedCases={country.today_new_confirmed} />)  : countries.map((country) => <Country key={country.id} name={country.name} confirmedCases={country.today_new_confirmed} />) : 'Loading'}
      </ul>
    </>

  );
}
export default Countries;
