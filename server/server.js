const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')

const details = require('./routes/detailsRoute')

const MongoUri = `mongodb+srv://animesh:qgEqnbjYUvTIjpZo@animesh.8mwig.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(MongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(bodyParser.json())
app.use(cors())
app.use('/api/details', details)

const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})