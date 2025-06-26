//console.log("Server Response and Request");


import express from 'express'
import { title } from 'process';

const app = express();



// product details use in array 

const product = [
  {
    id: 1,
    title: "Iphone",
    price: 2000,
    Description: " This is new Lunch Phone"

  },
    {
    id: 2,
    title: "Real Me",
    price: 5000,
    Description: " This is new Lunch Phone"

  },
    {
    id: 3,
    title: "Motola",
    price: 15000,
    Description: " This is new Lunch Phone"

  },

  
]

const Review = [
  {
rating: 3,
comment: "Would not recommend!",
date: "2025-04-30T09:41:02.053Z",
reviewerName: "Eleanor Collins",
reviewerEmail: "eleanor.collins@x.dummyjson.com"
},
{
rating: 4,
comment: "Very satisfied!",
date: "2025-04-30T09:41:02.053Z",
reviewerName: "Lucas Gordon",
reviewerEmail: "lucas.gordon@x.dummyjson.com"
},
{
rating: 5,
comment: "Highly impressed!",
date: "2025-04-30T09:41:02.053Z",reviewerName: "Eleanor Collins",
reviewerEmail: "eleanor.collins@x.dummyjson.com"
}

  
]




// response  send
app.get('/', (req,res) =>{
  res.json({message:'Fetch All The Product',
    data: "jApki Marji",
    product: product,
    list:Review,
    success: true

  // html request
  //   res.send("<h1>This is Html request Data</h1>");



  });


}
);



const port = 5000;

app.listen(port, () => 
  console.log(`Server is running ${port}`)
)



