// ARRAY PARTE 2 - METADOS DE ARRAY

const arra2 = [30, 20, 10, 5]

//  FATIAMENTO: SLICE

console.log(arra2.slice(0, 2));
console.log(arra2.slice(0));

console.clear

//  ADICIONANDO ELEMENTOS: PUSH | UNSHIFT

let array3 =[]

console.log('adicionando elemento:', array3)
// METODO PUSH
array3.push(20, 40, 60); // pode adicionar quantos elementos for necessario, sempe separando os elementos por virgula(,)

console.log('depois de adicionar elemento:', array3)

console.clear

// METODO UNSHIFT
let array4 =[]
console.log('antes de adicionar elemento:', array4);

array4.unshift(10, 5, 0)

console.log('depois de adicionar elemento:', array4);

console.clear()

//  REMOVENDO ARRAYS: POP | SHIFT

// REMOVENDO POP
console.log('antes de REMOVER elemento com pop:', array4);

array4.pop()

console.log('depois de remover elemento com pop:', array4);

// REMOVENDO SHIFT
let array5 =[10, 50, 30, 40]
console.log('antes de REMOVER elemento com shift:', array4);

array5.shift()
console.log('depois de remover elemento com shift:', array4);

console.clear();

// CONCATENANDO ARRAY: CONCAT

console.log(arra2);
console.log(array3);
console.log(array4);
console.log(array5);

console.log (arra2.concat(array3));

console.clear();

//  BUSCANDO ELEMENTOS: INDEXOF | LASTINDEXOF
let array6 =[10, 20, 30, 50, 10]
console.log(array6);

let indiceDoElemento = array6.indexOf(50)

console.log(indiceDoElemento);

console.log(array6.lastIndexOf(10));

console.clear();

//  DESCOBRINDO A EXISTENCIA DE UM ELEMENTO: INCLUDES

let array7 = [30, 20, 10 ]

console.log(array7);

console.log(array7.includes(40));

console.clear()

//  INVERTENDO ARRAYS: REVERSE 

let array8 = [10, 20, 30]

console.log('ARRAY MORMAL',array8);

console.log('ARRAY INVERTIDO..', array8.reverse());


