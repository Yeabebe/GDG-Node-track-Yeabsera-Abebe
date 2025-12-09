const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Route: GET /
  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to the Home Page');
  }

  // Route: GET /info
  if (method === 'GET' && url === '/info') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('This is the information page');
  }

  // Route: POST /submit 
  if (method === 'POST' && url === '/submit') {
    let body = '';

    // Collect incoming data
    req.on('data', chunk => {
      body += chunk;
    });

    // Finalize data reading
    req.on('end', () => {
      try {
        const jsonData = JSON.parse(body); // parse JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonData)); // echo back same JSON
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid JSON');
      }
    });

    return;
  }

  // Default route (404)
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route Not Found');
});

// Start server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
