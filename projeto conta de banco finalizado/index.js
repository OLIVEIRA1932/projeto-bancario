import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const Cliente1 = new Cliente("Gugu", 5163345488778)
const Cliente2 = new Cliente("Ana", 66720046493111)

const conta2 = new ContaCorrente(757,Cliente2)
const veve = new ContaCorrente(666, Cliente1)
veve.depositar(80)
veve.transferir(40, conta2)
console.log(veve)
console.log(conta2)