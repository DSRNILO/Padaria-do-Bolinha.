console.log("Bem-Vindo a Padaria do Bolinha!")
console.log("Temos Paês de: 1(Sal) - 2 (Creme) - 3 (carteira)")


do {
var pao = prompt("qual tipo de pao você gostaria ?"); 
if (pao == 1) {
  console.log("O pão de Sal custa R$0,25 a unidade");
} else if (pao == 2) {
  console.log("O pão de creme cada um custa R$ 0,50");
} else if (pao == 3) {
  console.log("cada pao carteira custa R$ 1,00");
} else {
  console.log("não temos esse sabor");
}
}while (pao >= 4 );

var quanti = prompt("Quantos paes ? ")
switch (pao) {
   case "1" :
      console.log("Total" + "R$" + Number(0.25) * quanti );
      break;
   case "2":
      console.log("Total" + "R$" + Number(0.50) * quanti);
      break;
   case "3":
      console.log("Total" + "R$" + Number(1) * quanti);
      break;
};

console.log("formas de pagamento:")
console.log("1-Dinheiro")
console.log("2-credito")
console.log("3-Debito")
do{
var pagamento = prompt("forma de pagamento:");

if (pagamento == 1) {
  console.log("Dinheiro Selecionado!")
  console.log("insira o dinheiro!")
} else if (pagamento == 2) {
  console.log("Cartao de Credito selecionado")
  console.log("insira o cartão!");
} else if (pagamento == 3) {
  console.log("Cartao de debito selecionado")
  console.log("insira o cartão!");
} else {
  console.log("forma de pagamento invalida");
}
}while (pagamento >= 4 );


for(var pagamento = 0; pagamento <6;pagamento++ ){
  console.log("....." +  pagamento)
}




var confirme = 0 
while(confirme < 3 ){
  console.log("pagamento efetuado com sucesso!")
confirme++
}



