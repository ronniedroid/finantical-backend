const {sendMessageOpts} = require('../dtos/index.js')

function router(fastify, options, done) {
  fastify.get('/message', sendMessageOpts)
  done()
}

module.exports = router
