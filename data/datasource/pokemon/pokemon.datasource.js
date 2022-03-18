const pokemonDatasource = (pokeAPI) => {
    return {
        getKanto: async() => {
            const {data} = await pokeAPI.get('/pokedex/kanto/')
            return data
        },
        getHoenn: async() => {
            const {data} = await pokeAPI.get('/pokedex/hoenn/')
            return data
        }
    }
}

module.exports = pokemonDatasource;