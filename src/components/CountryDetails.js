import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRegions } from '../redux/countries/countries';

function CountryDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.countries.countryDetails);

  useEffect(() => {
    dispatch(fetchRegions(params.date, params.countryName));
  }, []);

  return (
    <>
      {
        countryDetails
          ? (
            <>
              <h1>
                {countryDetails.name}
                :
                {' '}
                {countryDetails.today_new_confirmed}
              </h1>
              <ul>
                {
                 countryDetails.regions.map((region) => (
                   <li>
                     {region.name}
                     :
                     {' '}
                     {region.today_new_confirmed}
                   </li>
                 ))
              }
              </ul>
            </>
          )
          : (<p>Loading...</p>)
    }

    </>
  );
}
export default CountryDetails;
