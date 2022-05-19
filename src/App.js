import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Metrics from './components/Metrics';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Metrics />}
        exact
      />

      <Route
        path="/:date/countries"
        element={<Countries />}
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
