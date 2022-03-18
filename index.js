const express = require('express')
const app = express()
const port = 3000
const {pokemon} = require("./di");

app.use(pokemon.path, pokemon.controller)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})