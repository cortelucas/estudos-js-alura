class Cliente {
    nome;
    CPF;
    rg;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = `Lucas`;
cliente1.CPF = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 1122233345;

cliente2.nome = `Andressa`;
cliente2.CPF = 88899977709;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 3322211101;

console.log(cliente1);
console.log(cliente2);