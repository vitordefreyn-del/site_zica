
import logo from './logo.svg';
import './App.css';
import useFetchbrasilApi  from './useFetchbrasilApi.js';
import { useParams } from "react-router-dom";
import Registrar from './register.js';
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <div className="background pai">
      <div className="background filhoinfos">
        <Registrar />
      </div>
    </div>
  );
}

export default App;