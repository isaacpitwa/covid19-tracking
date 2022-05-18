import { Route, Routes } from 'react-router-dom';
import './App.css';
import Metrics from './components/Metrics';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Metrics />}
          exact
        />
        <Route
          path="/:date/country/:countryName"
          element={<CountryDetails />}
          exact
        />
      </Routes>
    </>
  );
}

export default App;
