const express = require('express')
 
const loginRoute = require('./login')

const app = express()

module.exports = app =>{
    app.use('/login', loginRoute)
} 