const express = require('express');
const app = express();

let resenias = [
  {Nombre_de_la_Pelicula: "Cars", Opinion : "La pelicula es horrible, ademas, es muy poco realista, como un auto va a hablar?", Puntuacion : "-10/10", Usuario : "lukita009"},
  {Nombre_de_la_Pelicula: "Shrek", Opinion: "Y el realismo? Los Ogros no existen, ademas, los burros no hablan", Puntuacion : "-10/10 y bad", Usuario : "pepito83"},
  {Nombre_de_la_Pelicula: "Mi pobre angelito", Opinion: "Es muy graciosa y entretenida", Puntuacion : "8/10", Usuario : "CristianoRonaldoSIUUU"}
]

app.get('/resenias', (_, res) => {
  res.send(resenias);
});

app.listen(3000);