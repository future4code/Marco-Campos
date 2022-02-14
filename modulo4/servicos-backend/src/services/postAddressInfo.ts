import { Address } from "../types/Address";
import axios from "axios";


const baseUrl = "https://viacep.com.br/ws"

export const postAddressInfo = async (cep: string, number: number, complement: string): Promise<Address | null> => {
    try {
        
    const response = await axios.get(`${baseUrl}/${cep}/json/`)

    const address: Address = {
        cep: cep,
        state: response.data.uf,
        city: response.data.localidade,
        neighborhood: response.data.bairro,
        street: response.data.logradouro,
        number: number,
        complement: complement
    }

    return address

    } catch (error) {
        console.log("Erro no serviço postAddressInfo:", error)
        return null
    }

}

