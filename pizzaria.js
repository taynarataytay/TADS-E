var precoMarguerita = parseFloat(prompt("Qual o valor da Pizza de Marguerita?"));
var precoCalabresa = parseFloat(prompt("Qual o valor da Pizza de Calabresa?"));
var precoNapolitana = parseFloat(prompt("Qual o valor da Pizza Napolitana?"));

var quantidadeMarguerita = parseInt(prompt("Digite a quantidade de pizzas Marguerita vendidas:"));
var quantidadeCalabresa = parseInt(prompt("Digite a quantidade de pizzas Calabresa vendidas:"));
var quantidadeNapolitana = parseInt(prompt("Digite a quantidade de pizzas Napolitana vendidas:"));

var totalVendas = (precoMarguerita * quantidadeMarguerita) +
                  (precoCalabresa * quantidadeCalabresa) +
                  (precoNapolitana * quantidadeNapolitana);

alert("O preço total das vendas foi de: R$ " + totalVendas.toFixed(2));
