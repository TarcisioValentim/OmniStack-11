const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
Rotas 
*
    Metodos HTTP

*GET: buscar/Listar uma informacao do back-end
*POST: Criar uma informacao no back-end
*PUT: Altera uma informacao no back-end
*DELETE: Deletar uma informacao no back-end

    Tipos de Parametros
    
*Query Param: Parametros nomeados enciados na rota apos?
*Route PAram: Parametros utilizados para id recursos
*Request body: Corpo da requisicao, utilizado para criar ou alterar recursos.

    Banco de Dados

*SQL: MySQL, SQLite, PostGres, Oracle, Microsoft Sql Serve
*NoSQL: MongoDB, etc.
*
*/

/**
 * *    KNEX
 * Driver: SELECT * FROM users
 * Query Builder: table('users').selec('*').where().
 * 
 */