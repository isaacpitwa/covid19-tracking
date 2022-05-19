import React from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../redux/countries/countries';

function Filter() {
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    dispatch(searchCountry(e.target.value));
  };
  const onOrderBy = (e) => {
    console.log(e.target.value);
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
            High To Low
          </option>
          <option value="desc">
            Low To High
          </option>
          <option value="alpha-asc">
            Alphabetic Ascending
          </option>
          <option value="audi">
            Alphabetic Descending
          </option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
