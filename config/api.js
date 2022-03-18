const axios = require("axios").default;

const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})

module.exports = pokeAPI