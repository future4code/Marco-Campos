```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let numero = numeroEscolhido
  let arr = arrayDeNumeros
  let novoArr 
  for(let i = 0; i< arr.length -1; i++){
    if(arr[i] === numeroEscolhido){
      return novoArr
    } else {return `Número não encontrado`}
    return novoArr
  }
  return `O número ${numeroEscolhido} aparece ${novoArr.length}x`
}
```