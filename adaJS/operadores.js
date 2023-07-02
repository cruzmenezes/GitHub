let num1 = 20;
let num2 = 30;
let num3 = 40;

console.log(num1, num2, num3);
console.log('soma', num1 + num2);
console.log('soma', (num1 + num3) * 2);

console.clear();


let age = 16;
let tenhoCNH = true;


const possodirigir = age >= 18 && tenhoCNH === true

console.log('posso dirigir', possodirigir);


let age2 = 40;

const votoFacu =  age2 < 18 || age2 >= 70

console.log(votoFacu);


let age3 = 16;

if (age3 >= 18){
    console.log('vc e maior de idade')
} else{
    console.log('vc e menor de idade')
}
