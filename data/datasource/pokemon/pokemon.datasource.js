const pokemonDatasource = (pokeAPI) => {
    return {
        getList: async() => {
            const {data} = await pokeAPI.get('/pokedex/kanto/')
            return data
        }
    }
}

module.exports = pokemonDatasource;