const prisma = require('../database/prisma');

module.exports = {
  async registrarEntrada(req, res) {
    const { visitanteId, unidadeId } = req.body;

    if (!visitanteId || !unidadeId) {
      return res.status(400).json({ erro: 'Os Ids do visitante e da unidade são obrigatórios.' });
    }

    try {
        //Verifica se o visitante já está dentro de algum lugar
        const acessoAtivo = await prisma.acesso.findFirst({
            where: {
                visitanteId: Number(visitanteId),
                dataSaida: null,
            },
        });

        if (acessoAtivo){
            return res.status(400).json({
                erro: 'Este visitante já está dentro de uma unidade. Registre primeiro sua saída antes de liberar uma nova entrada'
            });
        }
        //Registra entrada do visitante
      const acesso = await prisma.acesso.create({
        data: {
          visitanteId: Number(visitanteId),
          unidadeId: Number(unidadeId),
        },
      });
      res.status(201).json(acesso);
    } catch (error) {
      console.error('Erro ao registrar entrada:', error);
      res.status(500).json({ erro: 'Erro ao registrar entrada' });
    }
  },
  //Registra saida do visitante
  async registrarSaida(req, res) {
    const { id } = req.params;

    try {
      const acesso = await prisma.acesso.update({
        where: { id: Number(id) },
        data: { dataSaida: new Date() },
      });
      res.json(acesso);
    } catch (error) {
      console.error('Erro ao registrar saída:', error);
      res.status(500).json({ erro: 'Erro ao registrar saída' });
    }
  },
// Lista os visitantes por unidade
  async listarPorUnidade(req, res) {
    const { id } = req.params;

    try {
      const acessos = await prisma.acesso.findMany({
        where: { unidadeId: Number(id) },
        include: {
          visitante: true,
        },
      });
      res.json(acessos);
    } catch (error) {
      console.error('Erro ao listar movimentações:', error);
      res.status(500).json({ erro: 'Erro ao listar movimentações' });
    }
  }
};
