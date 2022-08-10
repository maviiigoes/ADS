// Escreva um programa que imprima os números inteiros entre dois valores lidos.

import { input } from "../io_utils.js";

function main(){
const num1 = Number(input('Digite o menor número: '))
const num2 = Number(input('Digite o maior número: '))

for(let i = num1; i<=num2; i++){
    console.log (i)
}
}


main()