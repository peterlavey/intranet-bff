const express = require('express')
const controller = express.Router()

const pokemonController = (pokemonRepository) => {
    controller.use(function timeLog(req, res, next) {
        console.log('Pokemon middleware: ', Date.now());
        next();
    });

    controller.get('/kanto', async (req, res) => {
        const kantoList = await pokemonRepository.getKanto()
        res.json(kantoList)
    })

    controller.get('/hoenn', async (req, res) => {
        const hoennList = await pokemonRepository.getHoenn()
        res.json(hoennList)
    })

    return {
        path: '/pokemon',
        controller
    }
}

module.exports = pokemonController;