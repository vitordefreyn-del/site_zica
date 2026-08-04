import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchbrasilApi (cep) {
const [dados, setDados] = useState({});
const [loading, setLoading] = useState (false);
const [error, setError] = useState (false);
 
useEffect (() => {

 if (!cep) {
    return;
  }

      const getData = async () => {
        try {

        setLoading(true);
        setError(false);

          const res = await 
          axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          setDados(res.data);
          console.log('Success:', res.data);
          setLoading(false); 
          
    
        }
        catch (err) {
          console.error("Erro ao carregar API", err);
          setLoading(false);
          setError(true);
        }
      };
      getData();
    },[cep]);

     return {
    dados,
    loading,
    error,
  };
}
     export default useFetchbrasilApi;