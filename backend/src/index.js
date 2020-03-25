/*
    Rota: http://localhost:3333/users
    Recurso: /users (geralmente associado com uma tabela de banco de dados)
*/

/*
    Métodos HTTP
    GET: Buscar/Listar uma informação do back-end

        sempre que criarmos uma rota que o 
        back-end vai retornar uma informação ultilizamos o método get

        quando acessamos uma rota pelo browser, 
        ele executa o método get (sempre)

        app.get()

    POST: Criar uma informação no back-end

        imagine que vc criou uma rota que vai criar um novo usuario
        então a rota vai receber os dados do usuario e criar o novo 
        usuario

        app.post()

    PUT: Alterar uma informação no back-end

        app.put()

    DELETE: deletar uma informação no back-end

        app.delete()

*/

/*
    Tipos de Paramentros:

    Query Parms: Parametros nomeados enviados na rota após "?" Server para (Filtrar, Paginação)
    Ex:
        http://localhost:3333/users?page=2&nome=Diego&Idade=25

    Route Parms: Parâmetros ultilizados para identificar recurços, identifica um unico recurso
    /users/:id -> dizendo para minha rota que 
    tudo que vier depois da barra de users vai ser o id do usuario

    Request Body: Corpo da requisição, ultilizado criar ou alterar recursos
    
    Imagine que você queira criar um novo usuário 
    ou alterar as informações de um usuário existente,
    para isso você teria que informar os dados do usuário (e-mail
    , telefone, nome, idade, etc...).

*/

/** 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
const cors  = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

 /*
        request - Guarda todos os dados
        que vierem atraves da requisição do usuário

        response - retorna uma resposta para o usuário
    */