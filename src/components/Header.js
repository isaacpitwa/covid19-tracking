import React from 'react';

function Header() {
  return (
    <div>
      <h1>COVID-19 Tracking</h1>
      <input type="date" defaultValue={Date.now()} />
    </div>
  );
}
export default Header;
