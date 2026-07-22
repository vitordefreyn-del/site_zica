import React from 'react';
import logo from './logo.svg';
import './App.css';
import  useFetchbrasilapi from './useFetchbrasilapi.js';
import { useParams } from "react-router-dom";


function App() {
  const { id } = useParams();
  const{cep} = brasilapi(id);
 
  if(loading) return 
  <div className="loader">
  Carregando Cep. . . </div>;
  if (error) return 
  <div className="error">
  ocorreu um erro inesperado </div>;

  return (
    <div classname= "background pai">
      <div class name usuario>

      </div>
    </div>
  );
}

export default App;
