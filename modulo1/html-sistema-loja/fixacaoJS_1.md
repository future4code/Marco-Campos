```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const CarrosVendidos = Number(qtdeCarrosVendidos)
 const totalVendas = Number(valorTotalVendas)
 let salario = Number(2000)
    if (CarrosVendidos>0){
        return salario = salario + CarrosVendidos * 100 + (totalVendas*5)/100
    }else 
        return salario
}
```