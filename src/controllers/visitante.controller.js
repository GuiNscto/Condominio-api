const prisma = require('../database/prisma');

module.exports = {
  
  async criarVisitante(req, res) {
    const { nome, documento, telefone } = req.body;
//Cria visitante
    try {
      const novoVisitante = await prisma.visitante.create({
        data: { nome, documento, telefone },
      });
      return res.status(201).json(novoVisitante);
    } catch (error) {
        console.error('Erro ao criar novo visitante', error);
      return res.status(500).json({ erro: 'Erro ao criar novo visitante', detalhe: error.message });
    }
  },


  async listarVisitantes(req, res) {
    //Lista todos os visitantes
    try {
      const visitantes = await prisma.visitante.findMany();
      return res.json(visitantes);
    } catch (error) {
        console.error('Erro ao listar visitantes:', error);
      return res.status(500).json({ erro: 'Erro ao listar visitantes' });
    }
  },


  async atualizarVisitante(req, res) {
    const { id } = req.params;
    const { nome, documento, telefone } = req.body;
//Atualiza algum dado do visitante
    try {
      const atualizado = await prisma.visitante.update({
        where: { id: Number(id) },
        data: { nome, documento, telefone },
      });
      return res.json(atualizado);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao atualizar visitante' });
    }
  },

  
  async deletarVisitante(req, res) {
    const { id } = req.params;
//Apaga visitante
    try {
      await prisma.visitante.delete({
        where: { id: Number(id) },
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao deletar visitante' });
    }
  },
};
