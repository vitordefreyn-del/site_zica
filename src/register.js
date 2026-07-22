import { useState } from 'react';
import './register.css';
import axios from 'axios';
function Registrar() {
  //states controlados pelo componente
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState(0);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  //manipuladores do formulario para editar variaveis de estado
  const manipularNome = (e) => {
    setNome(e.target.value);
    console.log(nome);
  };
  const manipularTel = (e) => {
    setTelefone(e.target.value);
    console.log(telefone);
  };
  const manipularCep = (e) => {
    setCep(e.target.value);
    console.log(cep);
  };

  //Manipulador do botão para executar uma ação
  const manipularBotao = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/01001000/json/`,
      );
      setEndereco(response.data);
      console.log(endereco);
    } catch (e) {
      console.error(e);
    }
  };

  //Formulario de cadastro
  return (
    <div>
      <form className='formRegistro'>
        Registrar novo endereço
        <label className='labelRegistro'>Nome</label>
        <input className='inputRegistro' onChange={manipularNome}></input>
        <label className='labelRegistro'>Telefone</label>
        <input className='inputRegistro' onChange={manipularTel}></input>
        <label className='labelRegistro'>CEP</label>
        <input className='inputRegistro' onChange={manipularCep}></input>
        <button className='buttonRegistro' onClick={manipularBotao}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Registrar;
