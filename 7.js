import { input } from "../io_utils.js";

function main(){
    const vetor = new Array(5)
    const vetor_2 = new Array(5)
    
    
    for(let i = 0; i<5; i++){
        vetor[i] = Number(input("Digite um número: "))
        vetor_2[i] = vetor[i]
     }
     
  vetor.sort(ordenar_num_cres)
  vetor_2.sort(ordenar_num_decres)

  console.log(vetor)
  console.log(vetor_2)

 }
  

function ordenar_num_cres(a,b){
    return a-b
}
function ordenar_num_decres(a,b){
    return b-a
}



main()