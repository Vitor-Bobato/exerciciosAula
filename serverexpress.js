const express = require("express");
const api = require("./info.json");

const app = express();
const port = 3000;
const { gerarNumeroAleatorio } = require('./utils');

app.get('/' , (req, res) => {
    res.send('Bem vindo!')
});

app.get('/sobre' , (req, res) => {
    res.send('Meu nome eh vtor boatob!')
});

app.get('/contato' , (req, res) => {
    res.send('@vitorbobato')
});

app.get('/numero', (req, res) => {
    const numero = gerarNumeroAleatorio();
    res.send(`Número aleatório: ${numero}`);
  });

  app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
  });

  app.get('/api/data', (req, res) => {
    res.send(api);
  });



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});