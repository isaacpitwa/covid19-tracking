import React from 'react';

function Header() {
  return (
    <header>
      <h1>COVID-19 Tracking</h1>
      <input type="date" value={Date.now()} />
    </header>
  );
}
export default Header;
