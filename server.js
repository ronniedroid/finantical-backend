const fastify = require("fastify")({logger: true});

const PORT = 5000

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {title: 'finantical-backend'}
  }
})

fastify.get('/message', (_req, reply) => {
  reply.send({test: 'we are ok'})
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
