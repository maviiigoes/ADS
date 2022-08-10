// Escreva um programa que apresente o mês por extenso, a partir de um número
// digitado pelo usuário (entre 1 e 12) e a quantidade de dias do mês.

import { input } from "../io_utils.js";

function main(){
    const num = Number(input("Digite um número entre 1 e 12: "))
    const mes = mes_nome(num)
    console.log(mes)
}

function mes_nome(n){
    if(n===1){
        return 'janeiro'
    }else if(n===2){
        return 'fevereiro'
    }else if(n===3){
        return 'março'
    }else if(n===4){
        return 'abril'
    }else if(n===5){
        return 'maio'
    }else if(n===6){
        return 'junho'
    }else if(n===7){
        return 'julho'
    }else if(n===8){
        return 'agosto'
    }else if(n===9){
        return 'setembro'
    }else if(n===10){
        return 'outubro'
    }else if(n===11){
        return 'novembro'
    }else if(n===12){
        return 'dezembro'
    }
}


main()