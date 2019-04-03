const express = require('express')
const consign = require('consign')
const cors = require('cors')

const app = express()

app.use(cors())


consign()
    .include('./src/db.js')
    .then('./lib/middleware.js')
    .then('./lib/boot.js')
    .then('./src/routes/index.js')
    .into(app)