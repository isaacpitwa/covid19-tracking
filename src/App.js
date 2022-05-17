import { Route, Routes } from 'react-router-dom';
import './App.css';
import Metrics from './components/Metrics';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Metrics />}
        exact
      />

    </Routes>
  );
}

export default App;
