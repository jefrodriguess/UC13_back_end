import jwt from "jsonwebtoken";

//Definido uma chave secreta para verificar e crar tokens JWT
const JWT_SECRET = "secreta-chave";

// Middleware de auteticação para verificar o token JWT nas requisição
export const autheticate = (req, res, next) => {
  //Obtendo o token do cabeçalho athorization (Token no formato "earer <token>")
  const token = req.headers.uthorization?.split("")[1];

  //Se o token não for fornecido, retorna o erro 401 (não autorizado)
  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }
  try {
    //Verifica a validade do token utlizando a chave secreta
    // A função jwt.verify decodifica e valida o token
    const decoded = jwt.verify(token, JWT_SECRET);

    //Se o token dor valido, o payload decodificado é atribuido a req.user
    req.user = decoded;

    next();
  } catch (error) {
    // Se o token for valido ou verificação falhar, retorna erro 401 (não autorizado)
    res.status(401).json({ masagem: "Token inválido!" });
  }
};
