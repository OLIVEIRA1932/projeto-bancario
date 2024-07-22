import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas = 0
    agencia;
    saldo = 0;

    set Cliente(novovalor) {
        if(novovalor instanceof Cliente){
            this.Cliente = novovalor;
        }
    }

    get saldo() {
        return this.saldo
    }

    get Cliente() {
        return this.Cliente
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
            return valor
        } 
    }

    depositar(valor){
        if(valor <=0 ){
           return 
        }
        this.saldo += valor
    }

    transferir(valor,conta){
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado)
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas +=1
    }
}