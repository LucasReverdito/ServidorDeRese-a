const express = require('express');
const app = express();

app.get('/resenia', (_, res) => {
  res.send("Cars");
});

app.get('/opinion', (_, res) => {
  res.send("La pelicula es horrible, menos 10 sobre 10");
});

app.get('/puntuacion', (_, res) => {
  res.send("-10/10");
});

app.get('/Me_gusta', (_, res) => {
  res.send("No");
});

app.get('/No_me_gusta', (_, res) => {
  res.send("Si");
});

app.get('/Nombre_usu', (_, res) => {
  res.send("Lukita009");
});

app.get('/:nombre', (req, res) => {
  // <- Aquí va la linea de código que debes escribir
  res.send(`Tu nombre es ${_______}`);
});

app.listen(3000);