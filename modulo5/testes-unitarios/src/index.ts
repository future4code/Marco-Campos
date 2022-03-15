
//funcao teste
export const isEven = (n: number): boolean =>{
    return n % 2 === 0 
}

// atributos - nome, vida, defesa e força.  vida = 1500  / perda de vida por ataque = (força - defesa)

// ex 1

// a. Crie uma interface para representar os personagens
export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number
}

//b. Crie uma função validateCharacter que valide as informações de um personagem
//   (devolvendo true se for válida ou false caso contrário). Nenhuma das propriedades pode ser vazia. 
//   Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.


export const validateCharacter = (input: Character): boolean => {
    if(!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined){
        return false
    } else if (input.life <=0 || input.strength <=0 || input.defense <=0) {
        return false;
    } else return true
}

