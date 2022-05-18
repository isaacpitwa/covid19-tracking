import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { fetchCountries } from '../redux/countries/countries';
import Country from './Country';

function Countries() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries(params.date));
  }, []);
  return (
    <>
      <nav className="page-heading">
        <div className="back">
          <button to={`/${params.date}/countries`} onClick={() => { navigate(-1); }} type="button">
            <p>
              <IoIosArrowBack size={18} />
              <span>{params.date}</span>
            </p>
          </button>
        </div>
        <h4>Countries</h4>
        <div />
      </nav>
      <ul>
        { countries ? countries.sort(() => Math.random() - 0.5).map((country) => <Country key={country.id} name={country.name} confirmedCases={country.today_new_confirmed} />) : 'Loading'}
      </ul>
    </>

  );
}
export default Countries;
