import express from 'express';
import { getCarros, getCarro, createCarro, updateCarro, deleteCarro } from '../controllers/carroController.js';

const router = express.Router();

router.get("/", getCarros); //Rota para obter todos os carros

router.get("/:sigla", getCarro); //Rota para obter um carro pela sigla 

router.post("/",createCarro); //Rota para criar um novo carro

router.put("/:sigla", updateCarro); // Rota para atualizar um carro

router.delete("/:sigla", deleteCarro); // Rota para deletar um carro

export default router;