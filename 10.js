import { input } from "../io_utils.js";

function main(){
    const mileseg = Number(input("Digite o tempo em milisegundos: "))
    const dias = mileseg /(864*(10**5))
    const horas = (mileseg %(864*(10**5)))/24
    const minut = ((mileseg %(864*(10**5)))%24)/60
    const seg = (((mileseg %(864*(10**5)))%24)%60)/60

    console.log(`${dias.toFixed(0)} ${horas.toFixed(0)}: ${minut.toFixed(0)}:${seg.toFixed(0)}`)

}
main()