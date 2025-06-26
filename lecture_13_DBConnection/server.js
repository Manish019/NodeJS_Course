import express from "express";
const app = express(); // Entire express application
import mongoose from 'mongoose';
import { resturentRoutes } from './routes/resturent.routes.js';



// Connect to MongoDB using Mongoose
//mongoose.connect('mongodb://127.0.0.1:27017/manish') // own localhost/machine
mongoose.connect('mongodb+srv://arayanmanish:hqk79av8cXsJBrbJ@cluster0.3qevgge.mongodb.net/') // cloud atlas
// Note: Ensure that you have the correct username and password for your MongoDB Atlas cluster  
// this connects method returns a promise
// username => arayanmanish 
//password  => hqk79av8cXsJBrbJ
// mongodb+srv://arayanmanish:hqk79av8cXsJBrbJ@cluster0.3qevgge.mongodb.net/

.then(()=>{
  console.log("DB CONNECTED SUCCESSFULLY");
})
.catch((err)=>{
  console.log("DB NOT CONNECTED", err);
});


// route or routes

app.get('/', (req, res) => {
  res.send("Welcome to the Resturent API");
})


// Middleware to parse JSON bodies

// This middleware is used to parse the JSON data sent in the request body
app.use(express.json()) // for parsing application/json
resturentRoutes(app);





const PORT = 5051;
app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
})
