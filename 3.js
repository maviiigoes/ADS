// Escrever um programa que leia três valores inteiros e apresente o maior e o menor dos
// valores lidos

import { input } from "../io_utils.js";

function main(){
    const valores = input('Digite três valores (ex: 2,3,4): ').split(',').map(Number)
    const valor1 = valores[0]
    const valor2 = valores[1]
    const valor3 = valores[2]
    const menorvalor = menor(valor1,valor2,valor3)
    const maiorvalor = maior(valor1,valor2,valor3)

    console.log(`Menor valor: ${menorvalor} \nMaior valor : ${maiorvalor} `)

}

function menor(v1,v2,v3){
    if(v1<v2 && v1<v3){
        return v1
    }else if (v2<v1 && v2<v3){
        return v2
    }else{
        return v3
    }
}

function maior(v1,v2,v3){
    if(v1>v2 && v1>v3){
        return v1
    }else if (v2>v1 && v2>v3){
        return v2
    }else{
        return v3
    }

}

main()