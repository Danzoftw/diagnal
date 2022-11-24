import './App.css';
import {stylesheet} from "./css/stylesheet.css";
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Data from "./Components/Data"
import React, { Suspense } from 'react';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Data />
      </Suspense>
      
    </div>
  );
}

export default App;
