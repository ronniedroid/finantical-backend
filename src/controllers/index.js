const message = {
  message: "we did it",
  id: 2
}

function sendMessage(req, reply) {
  console.log(fastify.pg)
  reply.send(message)
}

module.exports = {
  sendMessage
}
