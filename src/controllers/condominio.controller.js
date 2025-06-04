const prisma = require('../database/prisma');

module.exports = {
  
async criarCondominio(req, res) {
  const { nome, endereco } = req.body;
//Se algum campo estiver vazio impede de criar o condominio
  if (!nome || !endereco) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }
//Cria novo condominio
  try {
    const condominio = await prisma.condominio.create({
      data: { nome, endereco },
    });
    res.status(201).json(condominio);
  } catch (error) {
    console.error('Erro ao criar condomínio:', error);
    res.status(500).json({ erro: 'Erro ao criar condomínio' });
  }
},

async criarUnidade(req, res) {
  const { numero, morador, condominioId } = req.body;
//Se algum campo estiver vazio impede de criar uma unidade
  if (!numero || !morador || !condominioId) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }
//Cria nova unidade
  try {
    const unidade = await prisma.unidade.create({
      data: { numero, morador, condominioId: Number(condominioId) },
    });
    res.status(201).json(unidade);
  } catch (error) {
    console.error('Erro ao criar unidade:', error);
    res.status(500).json({ erro: 'Erro ao criar unidade' });
  }
},

  async listarCondominios(req, res) {
    //Lista todos os condominios
    try {
      const condominios = await prisma.condominio.findMany();
      res.json(condominios);
    } catch (error) {
      console.error('Erro ao listar condomínios:', error);
      res.status(500).json({ erro: 'Erro ao listar condomínios' });
    }
  },

  async listarUnidadesPorCondominio(req, res) {
    const { id } = req.params;
//Lista as unidades ligadas a um condominio
    try {
      const unidades = await prisma.unidade.findMany({
        where: { condominioId: Number(id) },
      });
      res.json(unidades);
    } catch (error) {
      console.error('Erro ao listar unidades:', error);
      res.status(500).json({ erro: 'Erro ao listar unidades' });
    }
  },

  async listarCondominiosComUnidades(req, res) {
    try {
      const lista = await prisma.condominio.findMany({
        include: { unidades: true },
      });
      res.json(lista);
    } catch (error) {
      console.error('Erro ao listar relação condomínios-unidades:', error);
      res.status(500).json({ erro: 'Erro ao listar dados' });
    }
  },
};
