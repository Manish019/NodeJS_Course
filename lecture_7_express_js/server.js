// console.log("Express  Install Successfully ...!");

import express from 'express'

const app = express();

const port = 4000;

//routing

app.get('/', (req, res) => {
  res.send("you are requested of Home route")
})

// create multiple route page

app.get('/about', (req,res) =>{
  res.send("Your Request From SRK File")

})

app.listen(port, () => 
console.log(`Server is running  ${port}`)
 )