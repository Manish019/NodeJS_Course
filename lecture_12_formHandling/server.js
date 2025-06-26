//console.log("Server is running on port 3000");


// create a server using express
import express from 'express';

const app = express();

// create route for the server

app.get('/', (req, res) => {
  res.render('index.ejs');
});



const PORT = 8000;
// create a route for the seraver  there is no static file

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})