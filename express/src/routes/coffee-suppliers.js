const suppliers = require('../../data/coffee-suppliers.json')

const list = (req, res) => {
  res.send(suppliers)
}

module.exports = { 
  list
}