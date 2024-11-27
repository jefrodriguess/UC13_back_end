import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get ('/', (req, res) => {
    res.status(200).send(carros2024);
});

app.listen(3001,() => console.log("Servidor Funcionando..."));

