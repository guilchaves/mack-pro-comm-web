const express = require('express')

const CategoryController = require('./controller/CategoryController')
const GameController = require('./controller/GameController')

const routes = express.Router()

// rotas de categoria
routes.get('/categorias', CategoryController.getAll)
routes.get('/categorias/:id', CategoryController.getCategory)
routes.post('/categorias', CategoryController.insert)
routes.put('/categorias/:id', CategoryController.update)
routes.delete('/categorias/:id', CategoryController.delete)

//rotas de jogo
routes.get('/jogos', GameController.getAll)
routes.get('/jogos/:id', GameController.getGame)
routes.post('/jogos', GameController.insert)
routes.put('/jogos/:id', GameController.update)
routes.delete('/jogos/:id', GameController.delete)

module.exports = routes
