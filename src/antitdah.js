import { openDB } from "idb"; //imports//

const banquinho_dados = "CadastroCEP";
const versao = 1;                           //consts secundarias 
const nomedaTabela = "usuarios";            //são só para definir os nomes,versão,etc

const dbPromise = openDB(banquinho_dados, versao, {         //const principal//
  upgrade(db) {

    if (!db.objectStoreNames.contains(nomedaTabela)) {
        db.createObjectStore(nomedaTabela, {keyPath: "id",    //aqui cria a tabela//
        autoIncrement: true});}},});

export async function salvarUsuario(usuario) {
const db = await dbPromise;                                  //aqui salva as informações//
await db.add(nomedaTabela, usuario);                         //e mostra as informações na tabela//
}

export async function buscarUsuarios() {
const db = await dbPromise;
return await db.getAll(nomedaTabela);
}