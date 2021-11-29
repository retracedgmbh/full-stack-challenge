const express = require('express')
const pino = require('pino-http')
const { host, port } = require('./config')
const { coffeeSuppliers } = require('./routes')

const  options = {
  transport: {
    target: 'pino-pretty'
  }
}

const app = express()
const logger = pino(options)

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/coffee-suppliers', coffeeSuppliers.list)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
