// Escreva um programa para converter de real para bitcoin e exibir para o usuário a
// resposta final. Considere até 8 casas decimais

import { input } from "../io_utils.js";

function main(){
    const valor_real = Number(input("Digite o valor em reais: "))
    const valor_bit = Number(input("Digite a cotação do bitcoin: "))
    const valor_convertido = valor_bit * valor_real

    console.log(`Valor convertido: ${valor_convertido.toFixed(8)}`)
}

main()