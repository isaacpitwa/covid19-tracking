import React from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry, sortCountries } from '../redux/countries/countries';

function Filter() {
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    dispatch(searchCountry(e.target.value));
  };
  const onOrderBy = (e) => {
    dispatch(sortCountries(e.target.value));
  };
  return (
    <div className="select-dates filter">
      <h3>Filter Countries</h3>
      <div>
        <input type="text" name="searchTxt" onChange={onSearchChange} placeholder="Search Country" />
        <select name="order" id="order" onChange={onOrderBy} placeholder="Order By">
          <option value=" ">
            Order By
          </option>
          <option value="asc">
            Low To High
          </option>
          <option value="desc">
            High To Low
          </option>
          <option value="alpha-asc">
            Alphabetic Ascending
          </option>
          <option value="alpha-desc">
            Alphabetic Descending
          </option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
