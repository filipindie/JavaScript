/*JavaScript é multiparadigma
Boa notícia: o JavaScript é uma linguagem completamente flexível. Falando mais tecnicamente, isso significa que JavaScript é multiparadigma.
Ou seja, é correto programar em JavaScript:
1. De forma estruturada;
2. Utilizando orientação a objetos;
3. Com o paradigma funcional.
Isso é interessante porque nunca estamos presos a uma forma de programar.
A programação estruturada é mais simples para quem está começando, por isso é fácil começar a aprender JavaScript.
Vamos ver um exemplo, mas não se preocupe em compreender o código agora.
Vejamos um cálculo usando a programação estruturada:*/

var primeiroNumero = 9;
var segundoNumero = 4;
console.log(primeiroNumero + segundoNumero);

//O mesmo exemplo, utilizando funções:

var primeiroNumero = 9;
var segundoNumero = 4;
var somarNumero = function(primeiroNumero, segundoNumero){
return primeiroNumero + segundoNumero;
}
console.log(somarNumero (primeiroNumero, segundoNumero));

//Exemplo utilizando classes (com o framework React Native)

class Calculadora extends Component {
constructor(props){
super(props); this.somar=this.somar.bind(this);
}
somar(n1,n2){
return n1+n2;
}
}
/*
Resumindo: 1º - é comum usarmos pequenos scripts estruturados para iniciar o aprendizado da sintaxe da linguagem.
2º - Depois disso, programamos de forma funcional e/ou orientada a objetos, utilizando frameworks como o React e o Vue.js.*/