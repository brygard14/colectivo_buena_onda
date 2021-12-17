const { getFullMenu } = require('../server/controller/productController')

const express = require('express');
const cors = require('cors');
const path = require('path');
const res = require('express/lib/response');

const app = express()

app.use( '/photos', express.static(path.join(__dirname, '../photos')))
app.use(express.static('client'))


app.get('/', () => {
    resizeBy.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/api/products', getFullMenu)


// app.post('/api/subscribe', function(req,res) {
//     res.send('Gracias por suscribirte!');
//     // return res.redirect('/new_subscriber')
// });


const port = process.env.PORT || 4011 

app.listen(port, () => console.log(`server running on ${port}!`))