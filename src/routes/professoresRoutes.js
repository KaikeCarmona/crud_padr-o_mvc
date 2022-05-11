//importar biblioteca
const express = require('express');
const router = express.Router();
const professores = require('../controllers/professoresControllers')

// define the about route
router
    .get('/', professores.buscarDados)
    .get('/:id', professores.buscarDado)
    .post('/',professores.inserirDado )
    .put('/:id', professores.atualizarDado)
    .delete('/:id', professores.deletarDado)

module.exports = router;