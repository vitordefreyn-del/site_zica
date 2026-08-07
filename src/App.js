
import logo from './logo.svg';                               //imports//
import './App.css';
import useFetchbrasilApi  from './useFetchbrasilApi.js';
import { useParams } from "react-router-dom";
import Registrar from './register.js';
import React, { useState, useEffect } from 'react';
import aa from "./imagens/aa.jpeg";

function App() {

  return (
      <div style={{ backgroundImage:`url(${aa})`}}      /*imagem de fundo*/
      className="background_pai" >                      {/*html*/}
      <div className="background_filhoinfos">           
      <Registrar />                                     {/*tá trazendo a aba registros*/}

     </div>
     </div>
    
  );}
export default App;