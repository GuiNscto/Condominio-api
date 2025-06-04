
<body>

<h1>API - Controle de Visitantes em Condomínios</h1>

<p>A aplicação fornece uma API RESTful para controlar a entrada e saída de visitantes em unidades de condomínios.</p>

<h2>Tecnologias Utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>Prisma ORM</li>
  <li>Swagger (OpenAPI)</li>
  <li>Dotenv</li>
</ul>

<h2>Como rodar o projeto</h2>
<ol>
  <li>Clone o repositório:
    <pre>git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio</pre>
  </li>
  <li>Instale as dependências:
    <pre>npm install</pre>
  </li>
  <li>Configure o banco de dados:
    <pre>DATABASE_URL="postgresql://usuario:senha@localhost:5432/condominio_db"</pre>
  </li>
  <li>Rode as migrações:
    <pre>npx prisma migrate dev --name init</pre>
  </li>
  <li>(Opcional) Popular dados fictícios:
    <pre>node scripts/popular.js</pre>
  </li>
  <li>Inicie o servidor:
    <pre>node index.js</pre>
  </li>
</ol>

<h2>Documentação da API</h2>
<p>Acesse a documentação Swagger:</p>
<p><a href="http://localhost:3000/api-docs" target="_blank">http://localhost:3000/api-docs</a></p>

<h2>Funcionalidades</h2>

<h3>Visitantes</h3>
<ul>
  <li>GET /visitantes: Listar todos</li>
  <li>POST /visitantes: Cadastrar</li>
  <li>PUT /visitantes/:id: Atualizar</li>
  <li>DELETE /visitantes/:id: Remover</li>
</ul>

<h3>Condomínios & Unidades</h3>
<ul>
  <li>GET /condominios: Listar condomínios</li>
  <li>POST /condominios: Criar condomínio</li>
  <li>GET /condominios/:id/unidades: Unidades por condomínio</li>
  <li>POST /condominios/unidades: Criar unidade</li>
  <li>GET /condominios/unidades/todas: Mostrar relação completa</li>
</ul>

<h3>Controle de Acesso</h3>
<ul>
  <li>POST /acessos: Liberar entrada</li>
  <li>PATCH /acessos/:id/saida: Registrar saída</li>
  <li>GET /acessos/unidade/:id: Listar movimentações por unidade</li>
</ul>

<h2>Observações</h2>
<p>A documentação foi feita usando Swagger.</p>

<h2>O que foi feito</h2>
<ul>
  <li>[x] CRUD de visitantes</li>
  <li>[x] CRUD de condomínios e unidades</li>
  <li>[x] Controle de entrada e saída</li>
  <li>[x] Validações básicas</li>
  <li>[x] Documentação Swagger</li>
</ul>

</body>
</html>
