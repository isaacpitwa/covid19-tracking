import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRegions } from '../redux/countries/countries';
import Region from './Region';

function CountryDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.countries.countryDetails);

  useEffect(() => {
    dispatch(fetchRegions(params.date, params.countryName));
  }, []);

  return (
    <div>
      {
        countryDetails
          ? (
            <>
              <div className="details-header">
                <div className="img-bg" style={{ backgroundImage: 'url(\'/images/map.png\')' }} />
                <div className="content">
                  <h4>{countryDetails.name}</h4>
                  <p>
                    {countryDetails.today_new_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    {' '}
                    Cases
                  </p>
                </div>
              </div>
              <div className="heading">
                Country Regions -
                {' '}
                {params.date}
              </div>
              <ul className="regions-list">
                {
                 countryDetails.regions.map(
                   (region) => (
                     <Region
                       confirmedCases={region.today_new_confirmed}
                       name={region.name}
                       key={region.id}
                     />
                   ),
                 )
                 }
              </ul>
            </>
          )
          : (<p>Loading...</p>)
    }

    </div>
  );
}
export default CountryDetails;
