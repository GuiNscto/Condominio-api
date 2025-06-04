const express = require('express');
const router = express.Router();
const visitanteController = require('../controllers/visitante.controller');

/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Endpoints para gerenciamento de visitantes
 */

/**
 * @swagger
 * /visitantes:
 *   get:
 *     summary: Lista todos os visitantes
 *     tags: [Visitantes]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */

/**
 * @swagger
 * /visitantes:
 *   post:
 *     summary: Cadastra um novo visitante
 *     tags: [Visitantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               documento:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Visitante criado
 */


// Criar visitante
router.post('/', visitanteController.criarVisitante);

// Listar visitantes
router.get('/', visitanteController.listarVisitantes);

// Atualizar visitante
router.put('/:id', visitanteController.atualizarVisitante);

// Deletar visitante
router.delete('/:id', visitanteController.deletarVisitante);

module.exports = router;
