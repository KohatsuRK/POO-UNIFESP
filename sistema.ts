import { Bicicleta } from "./biciclea";
import { Contrato } from "./contrato";

export class Sistema{
    quantidadeBike: number 
    dono: string
    

    constructor(quantidadeBike:number, dono: string){
        this.quantidadeBike = quantidadeBike
        this.dono = dono
    }

    bikeAlugadas(quantidade: number):void{
        this.quantidadeBike -= quantidade;
    }

}
