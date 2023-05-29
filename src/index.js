const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Usando o body-parser para fazer o parse do corpo da requisição
app.use(bodyParser.json());

// Definindo a rota "/subtrair"
app.post('/subtrair', (request, response) => {
    var body = request.body;
    
    function subtrair(a, b) {
      return a - b;
    }
    
    var resultado = subtrair(body.a, body.b);
    
    return response.send(`O resultado da subtração de ${body.a} por ${body.b} é ${resultado}`);
  });

  // Definindo a rota "/multiplicar"
app.post('/multiplicar', (request, response) => {
    var body = request.body;
    
    function multiplicar(a, b) {
      return a * b;
    }
    
    var resultado = multiplicar(body.a, body.b);
    
    return response.send(`O resultado da multiplicação de ${body.a} por ${body.b} é ${resultado}`);
  });
  
// Definindo a rota "/divisao"
app.post('/dividir', (request, response) => {
  var body = request.body;
  
  function divisao(a, b) {
    return a / b;
  }
  
  var resultado = divisao(body.a, body.b);
  
  return response.send(`O resultado da divisão de ${body.a} por ${body.b} é ${resultado}`);
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});