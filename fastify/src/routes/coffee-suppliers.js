const suppliers = require('../../data/coffee-suppliers.json')

const list = async (fastify, options) => {
  fastify.route({
    method: 'GET',
    url: '/suppliers',
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' }
            }            
          }
        }
      }
    },
    handler: async (request, reply) => suppliers
  })
} 

module.exports = list