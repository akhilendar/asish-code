import {Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import BMICalculator from './Components/BMICalculator';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/bmi" Component={BMICalculator} />
    </Routes>
  );
}

export default App;
