import Joi from "joi"; // importação do joi

export const modeloCarro = Joi.object({ // bloco de validação 
    nome: Joi.string().min(3).required(), // Nome do carro com no min. 3 caracteres 
    sigla: Joi.string().length(3).required(), // Sigla do carro, 3 caracteres
    velocidadeMaxima: Joi.number().min(1).required(), // Velocidade min. de 1
    potencia: Joi.number().min(1).required(), // Potencia min. de 1 CV
    consurmo: Joi.number().min(0.1).required(), // Consumo min. de 0.1 
    aceleracao: Joi.number().min(0).required(), // Aceleração min. 0
    preco: Joi.number().min(0).required(), // Preço min. de 0
});

export const modeloAtualizacaoCarro = Joi.object({ // Obs: sem .requered(obrigatório) pois cada campo pod ser atualiado individualmente
    nome> Joi.string(),min(3),
    sigla: Joi.string().length(3), // Sigla do carro, 3 caracteres, opcional
    velocidadeMaxima: Joi.number().min(1), // Velocidade min. de 1, opcional
    potencia: Joi.number().min(1)(), // Potencia min. de 1 CV, opcional
    consurmo: Joi.number().min(0.1), // Consumo min. de 0.1 , opcional
    aceleracao: Joi.number().min(0), // Aceleração min. 0, opcional
    preco: Joi.number().min(0)(), // Preço min. de 0, opcional
    // ano: Joi.number().integer()min(1886).max(nem).max(new Date ()(.gerFulYear))
}).min(1); // pelo menos um campo precisa ser atualizado 