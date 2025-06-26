// console.log("Crud Operation");

import express from 'express'

const app = express();


// C => Create => Post(Method)
// R => Read =>  GET (Method)
// U => Update => PUT(Method)
// D => Delete => DELETE (Method)




const port = 4000;

//routing

app.get('/suman', (req, res) => {
  res.send("you are requested of Home route")
})

// create data the we use

app.post('/about', (req,res) =>{
  //res.send("Your Request From SRK File")

})

app.listen(port, () => 
console.log(`Server is running  ${port}`)
 )