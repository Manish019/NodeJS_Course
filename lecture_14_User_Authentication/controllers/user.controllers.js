

import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
  try{

     let { fullName, email, password } = req.body;

  // Check if the user already exists
  if (await UserModel.findOne({ email })) {
    return res.status(400).json({ message: "User already exists" });
  }
  else {
    let newpassword = bcrypt.hashSync("password", 10); // Hash the password with a salt rounds of 10
    let newUser = await UserModel.create({ fullName,email,password:newpassword });
    //console.log(newUser);
   res.status(201).json({ message: "User registered successfully", user: newUser });
    
  }
  
  }
   catch(err){
       return  res.status(500).json({ message: "Error fetching data", error: err.message });
   }

}
