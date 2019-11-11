const server = require('./server')

const port = 4400

server.listen(port, () => {
    console.log('listening on port ' + port)
})