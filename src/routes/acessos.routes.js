const express = require('express');
const router = express.Router();
const acessoController = require('../controllers/acesso.controller');

/**
 * @swagger
 * tags:
 *   name: Acessos
 *   description: Controle de entrada e saída de visitantes
 */

/**
 * @swagger
 * /acessos:
 *   post:
 *     summary: Registra a entrada de um visitante
 *     tags: [Acessos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visitanteId: { type: integer }
 *               unidadeId: { type: integer }
 *     responses:
 *       201:
 *         description: Entrada registrada
 */

/**
 * @swagger
 * /acessos/{id}/saida:
 *   patch:
 *     summary: Registra a saída de um visitante
 *     tags: [Acessos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Saída registrada
 */

/**
 * @swagger
 * /acessos/unidade/{id}:
 *   get:
 *     summary: Lista movimentações de uma unidade
 *     tags: [Acessos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Lista de movimentações
 */

router.post('/', acessoController.registrarEntrada);
router.patch('/:id/saida', acessoController.registrarSaida);
router.get('/unidade/:id', acessoController.listarPorUnidade);

module.exports = router;
