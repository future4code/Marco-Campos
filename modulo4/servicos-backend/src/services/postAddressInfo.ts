import { Address } from "../types/Address";
import axios from "axios";
import connection from "../data/connection";


const baseUrl = "https://viacep.com.br/ws"

export const postAddressInfo = async (cep: string, number: number): Promise<Address | null> => {
    try {
        
    const response = await axios.get(`${baseUrl}/${cep}/json/`)

    const address: Address = {
        cep: response.data.cep,
        state: response.data.uf,
        city: response.data.localidade,
        neighborhood: response.data.bairro,
        street: response.data.logradouro,
        number: number,
        complement: response.data.complemento
    }

    return address

    } catch (error) {
        console.log("Erro no serviço getAddressInfo:", error)
        return null
    }

}

