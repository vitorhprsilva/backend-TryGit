const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()


router.get('/', (req, res)=>{
    res.send("../view/teste.html")
    console.log('login')
})

router.post('/autenticar', async (req, res)=>{
    console.log('post')
    return res.json({
        user: "teste"
    })
})

module.exports = router