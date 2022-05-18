/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { fetchRegions } from '../redux/countries/countries';
import Region from './Region';

function CountryDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.countries.countryDetails);

  useEffect(() => {
    dispatch(fetchRegions(params.date, params.countryName));
  }, []);

  return (
    <div>
      <nav className="page-heading">
        <div className="back">
          <button to={`/${params.date}/countries`} onClick={() => { navigate(-1); }} type="button">
            <p>
              <IoIosArrowBack size={18} />
              <span>Countries</span>
            </p>
          </button>
        </div>
        <h4>{params.countryName}</h4>
        <div />
      </nav>
      { countryDetails ? (
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
                 countryDetails.regions.length > 0
                   ? countryDetails.regions.map(
                     (region) => (
                       <Region
                         confirmedCases={region.today_new_confirmed}
                         name={region.name}
                         key={region.id}
                       />
                     ),
                   ) : (<p>No Regions Found</p>)
                 }
          </ul>
        </>
      ) : <p>Loading...</p>}

    </div>
  );
}
export default CountryDetails;
