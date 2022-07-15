const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log (req.url)
	const body = req.url //=== '/style.css'
	//?
	//:	
	if (req.url === '/style.css') {
		fs.readFileSync('./public/style.css')
	} else {
		fs.readFileSync('./public/index.html');
	}
    return
	//} else {


	//} 
	res.end(body)
})
server.listen(3000)

console.log('Server started')
