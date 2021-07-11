const {sendMessage} = require('../controllers/index.js')

const sendMessageOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {type: 'string'},
        }
      },
    },
  },
  handler: sendMessage,
}

module.exports = {
  sendMessageOpts
}
