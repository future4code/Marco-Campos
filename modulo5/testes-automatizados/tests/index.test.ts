import { CompraUsuario, isEven } from "../src"



describe("intro teste 1", () => {

    test("numero é par", () => {

        const valorDaFuncao = isEven(2)
        const valorDaFuncao2 = isEven(100)
        const valorDaFuncao3 = isEven(5)
        const valorDaFuncao4 = isEven(15)
        const valorDaFuncao5 = isEven(1)


        expect(valorDaFuncao).toBe(true)
        expect(valorDaFuncao2).toBe(true)
        expect(valorDaFuncao3).toBe(false)
        expect(valorDaFuncao4).toBe(false)
        expect(valorDaFuncao5).toBe(false)

        
    })
})


describe("Teste 2", () => {

        test("teste de compra saldo maior", () => {
            const valorDaCompra = 25
            const usuario = {
                nome: "Raphael",
                saldo: 50
            }

            const resultadoDaFuncao = CompraUsuario(usuario, valorDaCompra)

            expect(resultadoDaFuncao).toEqual({
                nome: "Raphael",
                saldo: 25
            })
        })


        test("teste compra saldo igual", () => {
            const valorDaCompra = 25
            const usuario = {
                nome: "Raphael",
                saldo: 25
            }

            const resultadoDaFuncao = CompraUsuario(usuario, valorDaCompra)

            expect(resultadoDaFuncao).toEqual({
                nome: "Raphael",
                saldo: 0
            })
        })


        test("teste compra saldo menor", () => {
            const valorDaCompra = 25
            const usuario = {
                nome: "Raphael",
                saldo: 0
            }

            const resultadoDaFuncao = CompraUsuario(usuario, valorDaCompra)

            expect(resultadoDaFuncao).not.toBeDefined()
        })

})
