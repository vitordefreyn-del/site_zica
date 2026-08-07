import { useState } from 'react';
import useFetchbrasilApi from "./useFetchbrasilApi"; //imports//
import './register.css';
import { salvarUsuario } from "./antitdah";

function Registrar() {
const [nome, setNome] = useState('');
const [telefone, setTelefone] = useState('');  //const//
const [cep, setCep] = useState('');
const { dados, loading, error } = useFetchbrasilApi(cep);

const manipularNome = (e) => {
setNome(e.target.value);
console.log(e.target.value);
};
const manipularTel = (e) => {                 //essas consts manipulam o login//
setTelefone(e.target.value);
console.log(e.target.value);
};
const manipularCep = (e) => {
const valorCep = e.target.value.replace(/\D/g, '');    //isso é para que o cep não seja um fixo//
setCep(valorCep);                                      //ele muda automaticamente as informações tiradas da api//
console.log(valorCep);                                 //se o cep for valido
};
const manipularBotao = async (e) => {e.preventDefault();  //isso é para salvar as informações//
const cadastro = {
nome,
telefone,
endereco: dados
};
await salvarUsuario(cadastro);
console.log("Salvo:", cadastro);
};

return (
        <div > 
        <form className='formRegistro'>
        <h2>Registrar novo endereço</h2>
        <label className='labelRegistro' >Nome</label>
        <input className='inputRegistro' value={nome} onChange=
        {manipularNome}></input>
        <label className='labelRegistro'>Telefone</label>
        <input className='inputRegistro' value={telefone} onChange=       /*html*/ 
        {manipularTel}></input>
        <label className='labelRegistro'>CEP</label>
        <input className='inputRegistro' value={cep} onChange=
        {manipularCep}></input>
        <button className='buttonRegistro' onClick=
        {manipularBotao}>
        Enviar
        </button>
        </form>
       
     {/* Exibição de mensagem de erro: */}
     {error && <p style={{ color: 'red' }}>Erro ao buscar CEP</p>}
     {/* Exibição dos dados retornados: */}
     {dados.logradouro && (
          <div className='resultadoEndereco'>
          <h3>Endereço Encontrado:</h3>
          <p>Rua: {dados.logradouro}</p>                           {/*aqui mostras as informações encontradas*/}
          <p>Bairro: {dados.bairro}</p>
          <p>Cidade: {dados.localidade} - {dados.uf}</p>
          </div>
)}        </div>);
}
export default Registrar;
