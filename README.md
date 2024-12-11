# API de carros - WebAPI

Está é uma API RESful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**.
A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD (Creat, Read, Update, Delete), que sera expandido no futuro. Este é apenas o escopo incial.

## Funcionalidades

- **GET /**: Retorna a lista completa de carros.
- **GET /sigla**: Retorna as informações de um carro especifico, identificado pela sigla.
- **POST /**: Adiciona um novo carro á lista.
- **PUT /sigla**: Atualiza as informações de um carro específico, identidicado pela sigla.
- **DELETE /sigla**: Remove um carro específico pela sigla.

## Estrutura do Projeto 
- **app.js**:  Arquivo principal que configura o servidor Express e as rotas de API
- **tabelacarros.js**: Contém a lista de carros (dados fictícios)
- **validação.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis 

### Exemplo de Resposta:

```json
[
 {
   "nome": "Ferrari",
   "sigla": "FER",
   "velocidade": 340,
   "potencia": 800,
   "consumo": 5.5,
   "aceleracao": 2.9,
   "preco": 300000
 },
]
