const express = require('express');
const app = express();

let resenia = {
  "Nombre_pelicula" : "Cars",
  "Opinion" : "La pelicula es horrible, ademas, es muy poco realista, como un auto va a hablar?",
  "Puntuacion" : "-10/10",
  "Nombre_usuario" : "Lukita009"
}

app.get('/resenia', (_, res) => {
  res.send(resenia);
});

app.listen(3000);