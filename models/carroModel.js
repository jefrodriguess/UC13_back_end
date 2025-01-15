
//console.log("Olá") = Equivale ao PRINT do Python
//const =  Criação de constante
//let = Criação de variavel 
//ARRAY 1 

const carros2024 = [
    {
        nome: 'Ferrari',
        sigla: 'FER',
        velocidadeMaxima: 340,
        potencia: 800,
        consumo: 5.5,
        aceleracao: 2.9,
        preco: 300000,
    },

    {
        nome: 'Lamborghini',
        sigla: 'LAM',
        velocidadeMaxima: 355,
        potencia: 770,
        consumo: 6.2,
        aceleracao: 2.8,
        preco: 330000,
    },

    {
        nome: 'Ford',
        sigla: 'HON',
        velocidadeMaxima: 220,
        potencia: 200,
        consumo: 12.0,
        aceleracao: 6.5,
        preco: 350000,
    },

    {
        nome: 'Fiat',
        sigla: 'FIA',
        velocidadeMaxima: 355,
        potencia: 770,
        consumo: 6.2,
        aceleracao: 2.8,
        preco: 250000,
    },

    {
        nome: 'Toyota Corolla',
        sigla: 'TOY',
        velocidadeMaxima: 200,
        potencia: 170,
        consumo: 15.0,
        aceleracao: 7.8,
        preco: 80000,
    },

    {
        nome: 'BMW ',
        sigla: 'BMW',
        velocidadeMaxima: 250,
        potencia: 258,
        consumo: 8.5,
        aceleracao: 5.8,
        preco: 180000,
    },

    {
        nome: 'Porsche 911',
        sigla: 'POR',
        velocidadeMaxima: 315,
        potencia: 500,
        consumo: 9.5,
        aceleracao: 3.7,
        preco: 280000,
    },

    {
        nome: 'Audi A4',
        sigla: 'AUD',
        velocidadeMaxima: 250,
        potencia: 245,
        consumo: 7.8,
        aceleracao: 5.9,
        preco: 170000,
    },

    {
        nome: 'Mercedes-Benz C-Class',
        sigla: 'MBZ',
        velocidadeMaxima: 250,
        potencia: 258,
        consumo: 8.2,
        aceleracao: 5.7,
        preco: 190000,
    },

    {
        nome: 'Nissan GT-R',
        sigla: 'NIS',
        velocidadeMaxima: 315,
        potencia: 565,
        consumo: 11.5,
        aceleracao: 2.8,
        preco: 250000,
    },

    {
        nome: 'Hyundai i30 N',
        sigla: 'HYU',
        velocidadeMaxima: 250,
        potencia: 275,
        consumo: 9.0,
        aceleracao: 5.9,
        preco: 130000,
    }
];

// função que retorna todos os carros array
export const getAllCarros = () => carros2024

//Função que retorna um carro especifico pelo seu identificador (sigla)
export const getCarroBySigla =(sigla) => {
    carros2024.push(novoCarro);  // Adiciona o novo carro ao final da lista
    return novoCarro; // Retorna o carro Adicionado 
};

// Função que adiciona um novo carro ao array 
export const createCarro = (novoCarro) => {
    carros2024.push(novoCarro);
    return novoCarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) =>{
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla); //Bucas o indice do carro no array usando a sigla
    if (carroIndex === -1) return null;
    carros2024[carroIndex] = { ...carros2024[carroIndex], ...dadosAtualizados}; //Atualiza os dados do carro com as infomações fornecidas 
    return carros2024[carroIndex];
};

// Função que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla); //Busca o indice do carro no array usando a sigla
    if (carroIndex === -1) return null; // Se não encontrar o carro retorna null
    const [carroRemovido] = carros2024.splice(carroIndex, 1); // Remove o carro da lista e retorna o carro removido
    return carroRemovido;
};