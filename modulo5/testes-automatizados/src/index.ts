import { updateImportEqualsDeclaration } from "typescript"






export const isEven = (integer: any): boolean => {
   return integer % 2 == 0
}

interface Usuario {
	nome: string
	saldo: number
}

export const CompraUsuario = (usuario: Usuario, valor: number) => {
    if(usuario.saldo >= valor){
        return {
            ...usuario,
            saldo: usuario.saldo - valor
        }
    } else {
        return undefined
    }
}