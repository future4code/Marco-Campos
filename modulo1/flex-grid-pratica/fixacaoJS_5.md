```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 const imprimirNomes = (animais) =>{
   return animais.nome
 }
 
 const imprimirNovoArr = animais.map(imprimirNomes)
 return imprimirNovoArr
  
}
```