const pokemonRepository = (pokemonDatasource) => {
    return {
        getKanto: async () => await pokemonDatasource.getKanto(),
        getHoenn: async () => await pokemonDatasource.getHoenn(),
    }
}

module.exports = pokemonRepository;