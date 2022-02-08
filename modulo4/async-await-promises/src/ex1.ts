import axios from 'axios'
import { baseURL } from './baseURL'
// Vamos começar fazendo uma função nomeada simples que retorne todos os assinantes da nossa aplicação.
// Ela deve ser assíncrona, porque utiliza o `async` para fazer a comunicação com o banco de dados.
// Além disso, por ora, indique que ela vai retornar um array de "qualquer coisa".

// ```
// Lembre-se de criar uma função "main" para testar suas funções assíncronas
// ```

// *a.* Qual endpoint você deve utilizar para isso?
    //getSubscribers
// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
    //<void[]>
// c. Implemente uma função nomeada que faça o que foi pedido.  


async function getSubscribers () {
    return await axios.get(`${baseURL}/subscribers`)
}

getSubscribers()
    .then(res => {return res.data})
    .then(console.log)