import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const cartas = [
  { id: 1, nome: "Arqueiras", tipo: "Tropa" },
  { id: 2, nome: "Gigante", tipo: "Tropa" },
  { id: 3, nome: "Mosqueteira", tipo: "Tropa" },
  { id: 4, nome: "Bebê Dragão", tipo: "Tropa" },
  { id: 5, nome: "Príncipe", tipo: "Tropa" },
  { id: 6, nome: "Mini P.E.K.K.A.", tipo: "Tropa" },
  { id: 7, nome: "Bruxa", tipo: "Tropa" },
  { id: 8, nome: "Horda de Servos", tipo: "Tropa" },
  { id: 9, nome: "Golem", tipo: "Tropa" },
  { id: 10, nome: "Esqueleto Gigante", tipo: "Tropa" },
  { id: 11, nome: "Bárbaros", tipo: "Tropa" },
  { id: 12, nome: "Mago", tipo: "Tropa" },
  { id: 13, nome: "Goblin com Dardo", tipo: "Tropa" },
  { id: 14, nome: "P.E.K.K.A.", tipo: "Tropa" },
  { id: 15, nome: "Zap", tipo: "Feitiço" },
  { id: 16, nome: "Bola de Fogo", tipo: "Feitiço" },
  { id: 17, nome: "Flechas", tipo: "Feitiço" },
  { id: 18, nome: "Tornado", tipo: "Feitiço" },
  { id: 19, nome: "Espelho", tipo: "Feitiço" },
  { id: 20, nome: "Lançador", tipo: "Tropa" },
];

app.get('/', (request, response) => {
  response.send({ data: "Hello world" });
});

app.get('/cartas', (request, response) => {
  response.send(cartas);
});

app.get('/cartas/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id)) {
    return response.status(400).send({ msg: 'ID inválido!'});
  }

  const cartaSolicitada = cartas.find( carta => carta.id === id );

  if (!cartaSolicitada) {
    return response.status(404).send({ msg: 'Carta não encontrada' });
  }

  return response.send(cartaSolicitada);
});

app.post('/cartas', (request, response) => {
  const novaCarta = {
    id: cartas[cartas.length - 1].id + 1,
    ...request.body
  };

  cartas.push(novaCarta);

  return response.status(201).send(novaCarta)
});

app.put('/cartas/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id)) {
    return response.status(400).send({ msg: 'ID inválido!' });
  }

  const indexCartaBuscada = cartas.findIndex((carta) => carta.id === id);

  if ( indexCartaBuscada === -1 ) {
    return response.status(404).send({ msg: 'ID não encontrado'});
  }

  cartas[indexCartaBuscada] = {
    id: id,
    ...request.body,
  };

  return response.status(200).send(cartas[indexCartaBuscada]);
});

app.patch('/cartas/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id)) {
    return response.status(400).send({ msg: 'ID inválido!' });
  }

  const indexCartaBuscada = cartas.findIndex((carta) => carta.id === id);

  if ( indexCartaBuscada === -1 ) {
    return response.status(404).send({ msg: 'ID não encontrado'});
  }

  cartas[indexCartaBuscada] = {
    ...cartas[indexCartaBuscada],
    ...request.body,
  }

  return response.status(200).send(cartas[indexCartaBuscada]);
});

app.delete('/cartas/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id)) {
    return response.status(400).send({ msg: 'ID inválido!' });
  }

  const indexCartaBuscada = cartas.findIndex((carta) => carta.id === id);

  if ( indexCartaBuscada === -1 ) {
    return response.status(404).send({ msg: 'ID não encontrado'});
  }

  const cartaExcluida = cartas.splice(indexCartaBuscada, 1);

  return response.status(200).send(...cartaExcluida);
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});