//Importar as bibliotecas
const express = require('express')
const app = express()


//Variaveisnode 
const port = 3000

const rotaprofessor = require("./routes/professoresRoutes")

app.use(express.json())
app.use('/', rotaprofessor)


//Servidor
app.listen(port,() => {
    console.log('Servidor em operação ...')
})
