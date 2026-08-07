import React, { useState, useEffect } from 'react'; //imports//
import axios from 'axios';

function useFetchbrasilApi (cep) {
const [dados, setDados] = useState({});             //consts//
const [loading, setLoading] = useState (false);      
const [error, setError] = useState ("");
 
useEffect (() => {

if (!cep || cep.length < 8) {
setError("CEP deve ter 8 números");                //se o cep tiver mais que nove digitos dá erro 
return;                                            //ent precisa dessa verificação pra açeitar//
}
const getData = async () => {
try {setLoading(true);
setError("");

const res = await 
axios.get(`https://viacep.com.br/ws/${cep}/json/`) //pegando informações da api//
setDados(res.data);
console.log('Success:', res.data);
setLoading(false); 
          
if (res.data.erro) {
setError("CEP não encontrado");                   //verifcação de cep//
setDados({});
return;
}
setDados(res.data);
}
catch (err) {
console.error("Erro ao carregar API", err);
setLoading(false);
setError
("você mora fora do planeta brazil tente um cep dentro");
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