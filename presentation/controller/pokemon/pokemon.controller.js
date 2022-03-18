const express = require('express')
const controller = express.Router()

const pokemonController = (pokemonRepository) => {
    controller.use(function timeLog(req, res, next) {
        console.log('Pokemon middleware: ', Date.now());
        next();
    });

    controller.get('/list', async (req, res) => {
        const list = await pokemonRepository.getList()
        res.json(list)
    })

    return {
        path: '/private',
        controller
    }
}

module.exports = pokemonController;