import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get ('/', (req, res) => {
    res.status(200).send(carros2024);
});

app.get ('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Obtendo a sigla //toUpperCase= aceita inf. maiuscula e minuscula
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); // Busca o carro pela sigla
    if (!carro){
    // ! vazio Not
        res.status(404).send("Não exite um carro com a sigla informada!"); //mensagem de erro 
    return;
    }
    res.status(200).send(carro); // resposta afirmativa (OK)
});

app.post("/", (req, res) => {
    const novoCarro = req.body; // Obtém o corpo enviado para incluir um carro
    carros2024.push(novoCarro); // Adiciona o novo carro à lista de carros 
    res.status(200).send(novoCarro); //Retona o carro adicionado com status 200 (OK)

})

// inicia o servidor da porta 30001:
app.listen(3001,() => console.log("Servidor Funcionando..."));

// node app.js
// localhost:30001/