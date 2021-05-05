// Arrays de objetos
//Funções dentro de variáveis.

let amigo = {nome: 'Emily',
sexo: 'F',
peso: 85.70,
engordar(p=0){
    console.log('Engordar')
    this.peso += p // auto-referência ao objeto    

}}
amigo.engordar(2)//A própria váriavel amigo tem funcionalidades dentro dela.
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
