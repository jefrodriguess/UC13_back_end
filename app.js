import express from 'express'; // Importa o framework Express, usado para criar o servidor e gerenciar rotas
import carroRoutes from './routes/carroRoute.js'; // Importa rotas relacionadas a carros (carroRoutes.js)

const app = express(); // Criar uma instância do aplicativo Express

app.use(express.json()); // Middlewares

app.use ('/carros', carroRoutes); // Rotas

app.listen(3001, () => { // Inicializa o servidor para executar na porta 3001
    console.log('Servidor rodando com sucesso na porta 3001');  // Quando  o servidor for inicializado, imprime no console que ele esta rodando na porta 3001
});