import { Bicicleta } from "./biciclea";
import { Sistema } from "./sistema";
import { Contrato } from "./contrato";
import { Cliente } from "./cliente";

const Jose = new Sistema(100,"José da silva")
const Caloi = new Bicicleta("Caloi","1212",250)
const Elias = new Cliente("Elias Santos","444999888-04")
const contrato = new Contrato(Jose,25,Elias,Caloi,2)
Jose.bikeAlugadas(1)
contrato.preco(250,2,Caloi)
console.log('Quantidade de Bicicletas alugadas: ', Jose.bikeAlugadas)
console.log('Preço da bicilceta alugada por Elias: ', contrato.preco)
console.log(contrato)