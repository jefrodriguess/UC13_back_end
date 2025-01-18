import { getAllCarros, getCarroBySigla, createCarro as modeloCreatCarro, updateCarro as modelUpdateCarro, deleteCarro as modelDeleteCarro} from '../models/carroModel.js';

export const getCarros = (req,res) => { //função para retornar todas os carros
    const carros = getAllCarros(); //Chama a função que retorna todos os carros do array
    res.status(200).json(carros); // Retorna os carros com status 200 (ok)
};

export const getCarro = (req, res) => {  //Função para retornar em carro especifico com base na sigla fornecida
    const { sigla } = req.params;  // Extrai a sigla do carro de URL (rota)
    const carro = getCarroBySigla(sigla.toUpperCase()); //Chama a função que retorna o carro pela sigla,convertendo a sigla para miusculas

    if (!carro) {  // Se o carro não for encontrado, retorna um erro 404 (Não encontrado)
        return res.status(404).json({ mensagem: 'Carro não encontrado!' });
    };

    res.status(200).json(carro);  // Retorna o carro encontrado com status 200 (ok)
};

export const createCarro = (req, res) => { // Funcção para criar um novo carro
    const { error } = modeloCarro.validate(req.body); //valida os dados do carro recebidos na requisição com base no modelo definido
    if (error) {  // Se houver erro de validação
        return res.status(400).json({ mensagem: error.details[0].mesage });
    }

    const novoCarro = req.body; //Caso os dados sejam válidos, cria um novo carro com os dados da requisição 
    const carroCriado = modeloCreatCarro(novoCarro);  //chama função para adicionar o novo carro 
    res.status(201).json(carroCriado); // retorna o carro criado com status 201 (Created)
};

export const updateCarro = (req, res) => { //Função para atualizar um carro existente
    const { sigla } = req.params;  //Extrai a sigla do carro da URL (rota)
    const { error } = modeloAtualizacaoCarro.validate(req.body); // valida os dados de atualização com base no modelo
    if (error) { // Se houver erro de validação, retorna status 400 ( bad request) e a mensagem erro
        return res.status(400).json({ mensagem: error.details[0].mesage }); 
    }

    const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body); // chama a função para atualizar os dados di carro, passando a sigla e os dados
    if (!carroAtualizado) { //se o carro não for encontrado para atualização, retorna status 404 (não encontrado)
        return res.status(404).json({ mensagem: 'Carro não encontrado para atualização' });
    }
};


export const deleteCarro = (req,res) => { //Funçã para excluir carro existente 
    const { sigla } = req.params; // extrai a sigla do carro da URL (rota)
    const carroRemovido = modelDeleteCarro(sigla.toUpperCase());  //Chama função para remover o carro, passando a sigla 
    if (!carroRemovido) { // se o carro não for encontrado para remoção, retorna status 404 (não encotrada)
        return res.status(404).json({mensagem: "Carro não encontrado para remoção"});
    }
    res.status(200).json({ mensagem: "Carro removido com sucesso!", carro: carroRemovido}); //retorna uma mensagem de suscesso e os dados do carro removido com status 200 (ok)

};



