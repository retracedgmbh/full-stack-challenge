const fastify = require('fastify')
const app = require('./app')
const { host, port } = require('./config')

const options = {
  logger: {
    level: 'info',
    prettyPrint: true
  }
}

const start = async() => {
  const server = fastify(options)   
  await app(server, options)

  server.listen(port, host, (err, address) => {
    if (err) {
      server.log.error(err)
      console.error(err)
      process.exit(1)
    }

    server.log.info(`app listening on ${address}`)
  })  
}

start()