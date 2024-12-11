import Joi from "joi"; // importação do join

export const modeloCarro = Joi.object({ // bloco de validação 
    nome: Joi.string().min(3).required().messages({  // Nome do carro com no min. 3 caracteres 
        'string.length': 'O nome do carro deve ter pelo menos 3 Caracteres.', //mensagem se não cumprir .min(3)
        'any.required': 'O nome do carro é obrigatório', //mensagem se não cumprir .required()
    }), 
    sigla: Joi.string().length(3).required().messages({  // Sigla do carro, 3 caracteres
        'string.length': 'A sigla deve conter exatamente 3 caracteres.', //mensagem se não cumprir .length(3)
        'any.required': 'A sigla é obriagatória.',
    }), 
    velocidadeMaxima: Joi.number().min(1).required().messages({   // Velocidade min. de 1
        'number.min': 'A velocidade maxima deve ser maior ou igual a 1.', //mensagem se não cumprir .min(1)
        'any.required': 'A velocidade maxima é obrigatória.',//mensagem se não cumprir .required()
    }),  
    potencia: Joi.number().min(1).required().messages({   // Potencia min. de 1 CV
        'number.min': 'A potência deve ser maior ou igual a 1.', //mensagem se não cumprir .min(1)
        'any.required': 'A potência é obrigatória.', //mensagem se não cumprir .required()
    }), 
    consumo: Joi.number().min(0.1).required().messages({    // Consumo min. de 0.1 
        'number.min': 'O consumo deve ser maior ou igual a 0.1.', //mensagem se não cumprir .min(0.1)
        'any.required': 'O consumo é obrigatório.', //mensagem se não cumprir .required()
    }),
    aceleracao: Joi.number().min(0).required().messages({    // Aceleração min. 0 
        'number.min': 'A aceleração deve ser maior ou igual a 0.', //mensagem se não cumprir .min(0)
        'any.required': 'A aceleração  é obrigatória.', //mensagem se não cumprir .required()
    }), 
    preco: Joi.number().min(1).required().messages({    // Preço min. de 1
        'number.min': 'O preço deve ser maior ou igual a 1', //mensagem se não cumprir .min(0)
        'any.required': 'O preço é obrigatório.', //mensagem se não cumprir .required()
    }), 
});

export const modeloAtualizacaoCarro = Joi.object({ // Obs: sem .requered(obrigatório) pois cada campo pod ser atualiado individualmente
    nome: Joi.string().min(3),
    sigla: Joi.string().length(3), // Sigla do carro, 3 caracteres, opcional
    velocidadeMaxima: Joi.number().min(1), // Velocidade min. de 1, opcional
    potencia: Joi.number().min(1), // Potencia min. de 1 CV, opcional
    consumo: Joi.number().min(0.1), // Consumo min. de 0.1 , opcional
    aceleracao: Joi.number().min(0), // Aceleração min. 0, opcional
    preco: Joi.number().min(0), // Preço min. de 0, opcional
    // ano: Joi.number().integer()min(1886).max(nem).max(new Date ()(.gerFulYear))
}).min(1); // pelo menos um campo precisa ser atualizado 