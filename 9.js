import { input } from "../io_utils.js";

function main(){
    const v = Number(input("Digite o valor:"))
    const t = Number(input("Digite a taxa:"))
    const array = []
    let valor_atual = v
    for(let i = 0 ; i<12;i++){
        array[i]= valor_atual
        valor_atual= valor_atual+(valor_atual*(t/100))
    }
console.table(array)

}

main()