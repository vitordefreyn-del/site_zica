import { useState } from 'react';
import useFetchbrasilApi from "./useFetchbrasilApi";
import './register.css';

function Registrar() {
  //states controlados pelo componente
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');

   const { dados, loading, error } = useFetchbrasilApi(cep);
  //manipuladores do formulario para editar variaveis de estado
  const manipularNome = (e) => {
    setNome(e.target.value);
    console.log(e.target.value);
  };
  const manipularTel = (e) => {
    setTelefone(e.target.value);
    console.log(e.target.value);
  };
  const manipularCep = (e) => {
    const valorCep = e.target.value.replace(/\D/g, '');
  setCep(valorCep);

  console.log(valorCep);
  };

  //Manipulador do botão para executar uma ação
  const manipularBotao = (e) => {
    e.preventDefault();
    
     console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("Endereço:", dados);
  };


  //Formulario de cadastro
  return (
    <div>
      <form className='formRegistro'>
        <h2>Registrar novo endereço</h2>
        <label className='labelRegistro'>Nome</label>
        <input className='inputRegistro' onChange=
        {manipularNome}></input>
        <label className='labelRegistro'>Telefone</label>
        <input className='inputRegistro' onChange=
        {manipularTel}></input>
        <label className='labelRegistro'>CEP</label>
        <input className='inputRegistro' onChange=
        {manipularCep}></input>
        <button className='buttonRegistro' onClick=
        {manipularBotao}>
          Enviar
        </button>
      </form>
      {/* Exibição de mensagens de erro */}
     {error && <p style={{ color: 'red' }}>Erro ao buscar CEP</p>}
      {/* Exibição dos dados retornados */}
      {dados.logradouro && (
        <div className='resultadoEndereco'>
          <h3>Endereço Encontrado:</h3>
          <p>Rua: {dados.logradouro}</p>
          <p>Bairro: {dados.bairro}</p>
          <p>Cidade: {dados.localidade} - {dados.uf}</p>
    </div>
      )}
    </div>
  );
}

export default Registrar;
