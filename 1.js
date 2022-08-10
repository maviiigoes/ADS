// 1. Escreva um programa que possua uma variável com um número ponto flutuante e
// mostre seu antecessor e sucessor, ambos inteiros.

import {input} from '../io_utils.js'

function main(){
    const num = Number(input("DIgite um número: "))
    const sucessor_num = Math.ceil(num)
    const antecessor_num = sucessor_num - 1

    console.log(`Antecessor = ${antecessor_num} Sucessor = ${sucessor_num}`)

}

main()