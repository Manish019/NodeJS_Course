
//create a template engine that can render a template with data
 import express from 'express';
  //import ejs from 'ejs';


 const app = express();

 app.get('/',(req, res) => {
    // Set the view engine to ejs
   let name = 'Manish'
   res.render('index.ejs', {name});

   // Render a simple HTML template with data


  })



 const PORT = 5000;
// Set the view engine to ejs 
 app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  
 })

