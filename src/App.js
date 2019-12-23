import React, { useContext } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Header from './components/header';
import Flights from './components/flightsContainer/flights/flights';
import { Provider as DataProvider } from './components/context/getAirportsData';
import { Context as AirpostContext } from './components/context/getAirportsData';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        <Header />
      </div>
    </DataProvider>
  );
}

export default App;
