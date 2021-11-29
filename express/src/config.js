const path = require('path')
const envPath = path.resolve(__dirname, '.env')

require('dotenv').config({ path: envPath })

const host = process.env.HOST || '0.0.0.0'

const port = process.env.PORT ?
  parseInt(process.env.PORT, 10) :
  3000

module.exports = {
  host,
  port,
}