// Importa o express
const express = require('express');

// Cria o aplicativo Express
const app = express();

// Define uma rota GET que responde "dado"
app.get('/dado', (req, res) => {
  res.json({ mensagem: 'dado' });
});

// Define a porta pra ele escutar
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
