import { Cliente } from "./cliente";
import { Bicicleta } from "./biciclea";
import { Sistema } from "./sistema";

export class Contrato{
    alugador: Cliente
    Dono: Sistema
    bike: Bicicleta
    qtdDiasAlugados: number 
    dataInicio: Date = new Date()
    valor: Number 

    constructor(Dono: Sistema, valor:number, alugador:Cliente,bike:Bicicleta,qtdDiasAlugados:number){
        this.Dono = Dono
        this.alugador = alugador
        this.bike = bike
        this.qtdDiasAlugados = qtdDiasAlugados
        this.valor = valor
    }
    
    preco(quantia:number,qtdDiasAlugados:number, bike:Bicicleta):void {
        this.valor = bike.valor * qtdDiasAlugados 
    }
}