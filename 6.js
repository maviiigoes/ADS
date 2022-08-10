// Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
// imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
// valor –1 é somente um terminador e não deve ser considerado nos cálculos.

import { input } from "../io_utils.js";
function main() {
    let num
    let soma = 0
    let ctt = 0
    let variancia = 0
    let arry =[]
    let media=0
    let i = 0


    while (num !== -1) {
        num = Number(input("Digite um número: "))
        soma += num
        arry[ctt] = num
        ctt++
    }
    media = soma / ctt

    while (i < arry.length) {
        variancia += (media - arry[i]) * (media - arry[i])
        i++

    }

    const desvio = Math.sqrt(variancia / arry.length)


    console.log(`Soma: ${soma}; Média ${media}`)
    console.log(`Desvio padrão: ${desvio.toFixed(2)}`)

}
main()