import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseFetchbrasilapi () {
const [cep,setcep] = useState ('');
const [loading, setLoading] = useState (true);
const [error, setError] = useState (false);
 
useEffect (() => {

      const getData = async () => {
        try {
          const res = await 
          axios.get(` https://https://viacep.com.br/
          /api/v2/cep/${cep}`,{},)
          setcep(res.data);
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
}
     export default UseFetchbrasilapi;