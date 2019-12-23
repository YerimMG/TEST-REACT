import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Header from './components/header';
import { Provider as DataProvider } from './components/context/getAirportsData';

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
