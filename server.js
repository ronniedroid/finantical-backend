const fastify = require("fastify")({logger: true});
const fastifyEnv = require('fastify-env')

const PORT = 5000


fastify.register(require(fastifyEnv), {dotenv: true})
fastify.register(require(pastify-postgres), {
  connectionString: proccess.env.CONNECTION_STRING
})
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {title: 'finantical-backend'}
  }
})

fastify.register(require("./src/routes/index.js"));

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
