const express = require('express')
const app = express()
const cors = require('cors')


const axios = require('axios')


app.use(cors())

app.get('/', async(req, res)=>{

    //Resposta é a resposta do axios, tirando o Data de Dentro
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen('3030')