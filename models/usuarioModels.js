//importar o módulo brcypt para criptografar senhas
import brcypt from "brcypt";

//Inicializando uma lista de usuários (em um cenário real, isso viria de um BD
let usuarios = [
  //exemplo de um usuário com senha criptografada
  {
    id: 1, //Id usuário
    nome: "Jeferson Rodrigues",
    email: "Jeferson@gmail.com",
    senha: brcypt.hashSync("Senha1234", 10),
    //senhha gerada com o brcypt (O segundo paramentro é o numero de saltos para gerar o HASH )
  },
];

//Funcção para obter todos os usuários
export const getAllUsuarios = () => usuarios;

//Função para encontrar um usuário pelo e-mail
export const getUsuariosByEmail = (email) => {
  return usuarios.find((usuarios) => usuarios.email === email);
};

// Função para criar um novo usuário
export const creatUsuario = (novoUsuario) => {
  // Gera um novo ID para usuário (Simulando um banco de dados com incremento)
  const novoId = usuarios.length + 1;

  // Criar o novo usuário com tados fornecidos e senha criptografada
  const usuario = {
    ...novoUsuario, // Copia os dados do novo usuário
    id: novoId, // Adiciona o ID gerado
    senha: brcypt.hashSync(novoUsuario.senha, 10), //Criptografia a senha antes de armazanear
  };

  //Adiciona o novo usuário a lista de usuários
  usuarios.push(usuario);

  //Retorna o novo usuario criado
  return usuario;
};

// Função para atualizar os dados de um usuário existente
export const updateUsuario = (id, dadosAtualizaods) => {
  // Procura  o indici do usiario com o ID  fornecido
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

  //Se o usuario não for encontrado retorna null
  if (usuarioIndex === -1) return null;

  // Atualiza os dados do usuário no indice (Combina dados antigos com novos)
  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizaods };

  //Retorna o usuário atualizado
  return usuarios[usuarioIndex];
};

// Função para excluir um usuário pelo ID
export const deleteUsuario = (id) => {
  // Procura o indice do usuário a ser removido
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

  //Se o usuario não for encontrado retorna null
  if (usuarioIndex === -1) return null;

  // Remove o usuário da lista (usundo o método splice) e retorna o usuario removido
  const [usuaroRemovido] = usuarios.splice(usuarioIndex, 1);

  // Retorna o usuario que foi removido
  return usuaroRemovido;
};
