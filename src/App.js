import { Route, Routes } from 'react-router-dom';
import './App.css';
import Metrics from './components/Metrics';
import Header from './components/Header';

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

      </Routes>
    </>
  );
}

export default App;
