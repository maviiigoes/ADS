import { input } from "../io_utils.js";

function main(){
    const texto = input('Digite o texto: ')
    let novo_texto = ' '
    for(let i=0 ; i<texto.length;i++){
        if(texto[i]== 'á' || texto[i]=='à' || texto[i]=='â'||texto[i]== 'Á' || texto[i]=='À' || texto[i]=='Â'){
            novo_texto += 'a'
        }else if(texto[i]== 'é' || texto[i]=='ê' || texto[i]=='É'|| texto[i]== 'Ê') {
            novo_texto+= 'e'
        }else if(texto[i]== 'í' || texto[i]=='Í') {
            novo_texto+= 'i'
        }else if(texto[i]== 'ó' || texto[i]=='ô'|| texto[i]=='Ó'|| texto[i]== 'Ô') {
            novo_texto+= 'o'
        }else if(texto[i]=='ú'|| texto[i]=="Ú"){
            novo_texto+='u'
        }else{
            novo_texto+=texto[i]

        }
        
        
    

    }
    console.log(novo_texto)

}

main()

