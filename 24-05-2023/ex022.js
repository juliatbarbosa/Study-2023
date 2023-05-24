//Objetos

let pessoa = {
    nome: 'Júlia',
    sexo: 'F',
    peso: 79,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)