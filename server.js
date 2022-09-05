const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const dotenv = require('dotenv')
dotenv.config({path:'config.env'})
const PORT = process.env.PORT ||8080

const morgan = require('morgan')
// Log requests
app.use(morgan('tiny'))

// parse request to body parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs')

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/css',express.static(path.resolve(__dirname,"assets/img")))
app.use('/css',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>
{
    res.render('index')

})

app.listen(PORT,()=>
{
    console.log(`Server is running in port ${PORT}`)
})