const { getFullMenu } = require('../server/controller/productController')

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()

app.use( '/photos', express.static(path.join(__dirname, '../photos')))
app.use(express.static('client'))


app.get('/', () => {
    resizeBy.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/api/products', getFullMenu)




const port = process.env.PORT || 4011 

app.listen(port, () => console.log(`server running on ${port}!`))