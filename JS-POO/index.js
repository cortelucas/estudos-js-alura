class Cliente {
    nome;
    CPF;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
}

const cliente1 = new Cliente();
cliente1.nome = `Lucas`;
cliente1.CPF = 11122233309;
cliente1.rg = 1122233345;


const cliente2 = new Cliente();
cliente2.nome = `Andressa`;
cliente2.CPF = 88899977709;
cliente2.rg = 3322211101;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.saldo = 0;
contaCorrenteCliente1.agencia = 1001;

console.log(cliente1);
console.log(cliente2);