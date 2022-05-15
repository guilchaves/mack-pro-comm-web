const express = require('express')

const CategoryController = require('./controller/CategoryController')
const GameController = require('./controller/GameController')
const UserController = require('./controller/UserController')
const RatingController = require('./controller/RatingController')

const routes = express.Router()

// rotas de categoria
routes.get('/categorias', CategoryController.getAll)
routes.get('/categorias/:id', CategoryController.getCategory)
routes.post('/categorias', CategoryController.insert)
routes.put('/categorias/:id', CategoryController.update)
routes.delete('/categorias/:id', CategoryController.delete)

// rotas de jogo
routes.get('/jogos', GameController.getAll)
routes.get('/jogos/:nome', GameController.getGamesByName)
routes.post('/jogos', GameController.insert)
routes.put('/jogos/:id', GameController.update)
routes.delete('/jogos/:id', GameController.delete)

// rotas de usuário
routes.post('/usuarios/login', UserController.login)
routes.post('/usuarios', UserController.insert)
routes.put('/usuarios/:id', UserController.update)

// rotas de avaliação
routes.get('/avaliacoes', RatingController.getAll)
routes.get('/avaliacoes/:id_jogo', RatingController.getGameRatings)
routes.post('/avaliacoes/:id_usuario/:id_jogo', RatingController.insert)
routes.put('/avaliacoes/:id_usuario/:id_jogo', RatingController.update)

module.exports = routes
