// console.log("Routing in Node Js");

import http, { createServer } from 'http'


  const server =  http.createServer((req, res) => {

    console.log(req.url);
    
    //res.end('<h1>Your Request Has Been Accepted</h1>');

    if (req.url === '/wdm'){
      res.end("Welcome to the web request")
    } else if (req.url === '/srk'){
      res.end("We are not able to something any request")
    } else{
      res.end("Invalide Request")
    }

  })


  const PORT = 5000;
  server.listen(PORT, ()=> 
    console.log(`Server is running ${PORT}`));