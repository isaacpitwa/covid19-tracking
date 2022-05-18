import { Route, Routes } from 'react-router-dom';
import './App.css';
import Metrics from './components/Countries';
import CountryDetails from './components/CountryDetails';
import DateCategories from './components/Metrics';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DateCategories />}
        exact
      />

      <Route
        path="/:date/countries"
        element={<Metrics />}
        exact
      />
      <Route
        path="/:date/countries/:countryName"
        element={<CountryDetails />}
        exact
      />
    </Routes>
  );
}

export default App;
