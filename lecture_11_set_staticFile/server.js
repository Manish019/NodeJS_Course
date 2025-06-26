import express from 'express';
import path from 'path';

const app = express();

// middleware to set static files
//what is middleware?
// Middleware is a function that has access to the request object (req), the response object
// (res), and the next middleware function in the application’s request-response cycle.

//public folder is used to serve static files like images, CSS files, and JavaScript files
 app.use(express.static(path.join(path.resolve(), 'public')));

 
// create route for static files
 app.get('/', (req,res) => {
  res.render('index.ejs');
})



 const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  
})
