const http = require('http')

http.createServer((req, res) => {
	console.log('Hello world')
})
server.listen(3000)

console.log('Server started')
