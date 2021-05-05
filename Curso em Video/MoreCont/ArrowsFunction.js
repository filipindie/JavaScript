// const func1 = function(param1) {
//     //normal function
// }

// const func11 = (param) => {
//     //statement body
// }

// const func2 = function (valor) {
//     return valor * 2
// }

// const func22 = (valor) => valor * 2

const vetor = [1,2, 3, 4]
vetor
    .map(valor => valor * 4)
    .map(valor => valor * 8)
// console.log(vetor.map(valor => valor * 2))

const names = [
    'Emily',
    'Filipe',
    'Lily',
    'Bery',
    'Gus',
  ];
  console.log(names.map(name => name.length));
  // resultado esperado: Array [5, 6, 4, 4, 3]
  