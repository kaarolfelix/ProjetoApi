const bodyParser = require('body-parser')
const tatuadores = require('./tatuadoresRoute')

module.exports = app => {
   app.use(bodyParser.json())
   app.use(tatuadores) 
}