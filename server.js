const http = require('http');

const port = process.env.PORT || 3000;

const handlesRequests = (req, res) => {
  console.log(`Received request for URL: ${req.url}`);
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end(`Hello World from ${req.url}`);
};

const www = http.createServer(handlesRequests);
www.listen(port, () => console.log(`Server listening on ${port}`));
