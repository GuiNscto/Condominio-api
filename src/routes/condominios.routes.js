const express = require('express');
const router = express.Router();
const condominioController = require('../controllers/condominio.controller');

/**
 * @swagger
 * tags:
 *   name: Condomínios
 *   description: Endpoints para gerenciamento de condomínios e unidades
 */

/**
 * @swagger
 * /condominios:
 *   get:
 *     summary: Lista todos os condomínios
 *     tags: [Condomínios]
 *     responses:
 *       200:
 *         description: Lista de condomínios
 */

/**
 * @swagger
 * /condominios:
 *   post:
 *     summary: Cadastra um novo condomínio
 *     tags: [Condomínios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               endereco: { type: string }
 *     responses:
 *       201:
 *         description: Condomínio criado
 */

/**
 * @swagger
 * /condominios/{id}/unidades:
 *   get:
 *     summary: Lista unidades de um condomínio
 *     tags: [Condomínios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Lista de unidades
 */

/**
 * @swagger
 * /condominios/unidades/todas:
 *   get:
 *     summary: Lista todos os condomínios com suas unidades
 *     tags: [Condomínios]
 *     responses:
 *       200:
 *         description: Lista completa
 */

/**
 * @swagger
 * /condominios/unidades:
 *   post:
 *     summary: Cadastra uma nova unidade
 *     tags: [Condomínios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero: { type: string }
 *               morador: { type: string }
 *               condominioId: { type: integer }
 *     responses:
 *       201:
 *         description: Unidade criada
 */


router.get('/', condominioController.listarCondominios); // lista todos os condominios
router.get('/:id/unidades', condominioController.listarUnidadesPorCondominio); // lista as unidades pelo id do condominio
router.get('/unidades/todas', condominioController.listarCondominiosComUnidades); //lista todas as unidades
router.post('/', condominioController.criarCondominio); // cria condominio
router.post('/unidades', condominioController.criarUnidade); // cria unidade

module.exports = router;
