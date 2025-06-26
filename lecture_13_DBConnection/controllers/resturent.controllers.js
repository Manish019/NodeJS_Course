import ResturentModel from "../models/Resturent.model.js";


// <======================<============================================<======================>
// How to createResturent function to handle the creation of a new restaurant
// This function will be called when a POST request is made to the /api/resturent endpoint
export async function createResturent(req, res) {
try{
      //console.log(req.body, "Req"); 
     //let {name,rating,cuisines,deliveryTime,imageUrl} = req.body; // destructuring the request body to get the data
    const newResturent = await ResturentModel.create(req.body);
      res.status(201).json({"newResturent": newResturent});
}
 catch(err){
     return  res.status(500).json({ message: "Error fetching data", error: err.message });
 }
}




//<======================<============================================<======================>

// How to fetchResturents function to fetch all the resturents from the database
export async function fetchResturents(req, res) {

try{
 const data =  await ResturentModel.find();
 // res.status(200).send("data fetched successfully");
  return res.status(200).json("data fetched successfully", data); //// this will send the data in json format
}

 catch(err){
     return res.status(500).json({ message: "Error fetching data", error: err.message });
      // res.status(500).send("Error fetching data"); both are same
 }
}


//<======================<============================================<======================>
  //How to UpdateResturent function to update a resturent by its ID

 export async function updateResturent(req, res) {

  try{
 const {id} = req.params; // destructuring the request parameters to get the ID of the resturent to be updated
      //  console.log(id, "Id");    // logging the ID to the console for debugging purposes
      // let{name,rating,cuisines,deliveryTime,imageUrl} = req.body;// destructuring the request body to get the data to be updated
   let updatedResturent = await ResturentModel.findByIdAndUpdate(id, req.body, {new:true}); // using findByIdAndUpdate method to update the resturent by its ID;
   res.send(updatedResturent , "New Resturent Update SuccessFully!"); // sending the ID back in the response
 
  }
catch(err){
     return res.status(500).json({ message: "Error fetching data", error: err.message });
      // res.status(500).send("Error fetching data"); both are same
 }

}




 //<======================<============================================<======================>
  // How to deleteResturent function to delete a resturent by its ID


 export async function deleteResturent(req, res) {
   try{
 const {id} = req.params; // destructuring the request parameters to get the ID of the resturent to be deleted
   await ResturentModel.findByIdAndDelete(id); // using findByIdAndDelete method to delete the resturent by its ID;
   res.status(200).json({"message": "Delete Resturent Successfully!"} );
 
  }
catch(err){
     return res.status(500).json({ message: "Error fetching data", error: err.message });
 }


 }