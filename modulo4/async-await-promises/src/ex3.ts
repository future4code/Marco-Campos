import Axios from "axios";
import { baseURL } from "./baseURL";
// Agora, vamos melhorar um pouco a nossa função,
// criando uma tipagem que represente os assinantes da nossa aplicação.
// No nosso caso, eles possuem um `id`, `name` e `email`, como indicado abaixo:

type user = {
	id: string;
	name: string;
	email: string;
}

// *a.* Se apenas trocarmos o retorno da função 
// para: `Promise<user[]>` , teremos algum erro de tipagem?
    // Não
// b. É boa prática fazermos um mapeamento do resultado de uma Promise,
// caso seja indicado que ela retorne um `Promise<any>`.
// Explique com as suas palavras o porquê de fazermos isso

// c. Reimplemente a função, corretamente.

const getSubscribers = async (): Promise<user[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    const users: user[] = []
    response.data.map((user: any)=>{
        users.push( {
            id: user.id,
            name: user.name,
            email: user.email
        })
    })
    return users
  };

getSubscribers()
 .then(console.log)