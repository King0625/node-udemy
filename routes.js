const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if(url === '/'){
		res.write(`<body><form action='/message' method='POST'>`);
		res.write(`<input type='text' name='message'>`);
		res.write(`<button type='submit'>Send</button></form></body`);
		return res.end();
	}
	if(url === '/message' && method === 'POST'){
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			// console.log(parsedBody);
			const message = parsedBody.split('=')[1];

			/* Sync */
			// fs.writeFileSync('message.txt', message);
			// res.statusCode = 302;
			// res.setHeader('Location', '/');
			// return res.end();

			/* Async */
			fs.writeFile('message.txt', message, err => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
			
		});


		// fs.writeFileSync('message.txt', 'HAHAHHA');
		// res.writeHead(302, {})
		
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Hello world</h1>');
	res.end();
	/* Send back to the client */
}


// module.exports = requestHandler;

// module.exports = {
// 	handler: requestHandler,
// 	someText: 'Some hard coded text'	
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
