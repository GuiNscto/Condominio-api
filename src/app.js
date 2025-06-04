const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger')

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// Importa as rotas
const visitanteRoutes = require('./routes/visitantes.routes');
app.use('/visitantes', visitanteRoutes);

const condominioRoutes = require('./routes/condominios.routes');
app.use('/condominios', condominioRoutes);

const acessoRoutes = require('./routes/acessos.routes');
app.use('/acessos', acessoRoutes);

module.exports = app;