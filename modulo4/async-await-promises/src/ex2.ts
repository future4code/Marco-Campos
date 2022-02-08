// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow function*. 

import Axios from "axios"
import { baseURL } from "./baseURL"

// *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona

// b. Implemente a função solicitada, usando arrow function




// const getSubscribers = async () => {
//     return  await Axios.get(`${baseURL}/subscribers`)
// }

    //getSubscribers()
    // .then(res => {return res.data})
    // .then(console.log)

    const getSubscribers = async (): Promise<any[]> => {
        const response = await Axios.get(`${baseURL}/subscribers`);
        return response.data;
      };

    getSubscribers()
     .then(console.log)