const express = require('express')

const CategoryController = require('./controller/CategoryController')
const GameController = require('./controller/GameController')

const routes = express.Router()

// rotas de categoria
routes.get('/categorias', CategoryController.getAll)
routes.post('/categorias', CategoryController.insert)

//rotas de jogo
routes.get('/jogos', GameController.getAll)
routes.get('/jogos/:id', GameController.getGame)
routes.post('/jogos', GameController.insert)
routes.put('/jogos/:id', GameController.update)
routes.delete('/jogos/:id', GameController.delete)

module.exports = routes
