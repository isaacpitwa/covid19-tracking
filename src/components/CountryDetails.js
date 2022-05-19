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
  }, [dispatch]);

  return (
    <div className="container">
      <nav className="page-heading">
        <div className="back">
          <button onClick={() => { navigate(`/${params.date}/countries`); }} type="button">
            <p className="button-txt">
              <IoIosArrowBack size={18} />
              <span>Countries</span>
            </p>
          </button>
        </div>
        <h4 className="page-title">{params.countryName}</h4>
        <div className="space-div" />
      </nav>
      <div className="details-header">
        <div className="img-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/map.png)` }} />
        <div className="content">
          <h4>{ countryDetails ? countryDetails.name : 'loading...'}</h4>
          <p>
            {countryDetails ? countryDetails.today_new_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'loading...'}
            {' '}
            Cases
          </p>
        </div>
      </div>
      { countryDetails ? (
        <>
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
      ) : <p className="details-loading">Loading...</p>}

    </div>
  );
}
export default CountryDetails;
