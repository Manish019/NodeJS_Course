/// console.log("Building  Server in Node.js");


import http, { createServer } from 'http';

// request and response 
const server = http.createServer((req, res) => {
res.end("you requested for somethings");
}) ;


//port number
const PORT = 5000;
// server listening
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  
})
