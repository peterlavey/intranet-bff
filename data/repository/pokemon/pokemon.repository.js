const pokemonRepository = (pokemonDatasource) => {
    return {
        getList: async () => await pokemonDatasource.getList()
    }
}

module.exports = pokemonRepository;