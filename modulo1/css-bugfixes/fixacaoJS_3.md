```
function calculaNota(ex, p1, p2) {
  let primeiraProva = p1
  let segundaProva = p2
  let exercios = ex
  let mediaPonderada = (p1 + p2 + ex)/3
  
    if(mediaPonderada>=9){
        return "A"
    } else if(mediaPonderada<9 && mediaPonderada>=7.5){
        return "B"
    } else if(mediaPonderada<7.5 && mediaPonderada>=6){
        return "C"
    } else{
        return "D"
    }
}
```