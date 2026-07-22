
import logo from './logo.svg';
import './App.css';
import useFetchbrasilapi  from './useFetchbrasilapi.js';
import { useParams } from "react-router-dom";
import Registrar from './register.js';
import React, { useState, useEffect } from 'react';

function App() {
  const { id } = useParams();
  const{cep} = useFetchbrasilapi(id);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);

  if(loading) return 
  <div className="loader">
  Carregando Cep. . . </div>;
  if (error) return 
  <div className="error">
  ocorreu um erro inesperado </div>;

  return (
    <div classname= "background pai">
      <div classname= "background filhoinfos">
        {Registrar()}
      </div>
    </div>
  );
}

export default App;