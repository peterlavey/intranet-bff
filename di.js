const pokemonController = require("./presentation/controller/pokemon/pokemon.controller");
const pokemonRepository = require("./data/repository/pokemon/pokemon.repository");
const pokemonDatasource = require("./data/datasource/pokemon/pokemon.datasource");
const pokeAPI = require("./config/api");


const pokemon = pokemonController(pokemonRepository(pokemonDatasource(pokeAPI)))

module.exports = {
    pokemon
}