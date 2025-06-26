import mongoose from 'mongoose';
//const { Schema } = mongoose;

const resturentSchema = new mongoose.Schema({

    name: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String,
    imageUrl: String


});

// Export the model
const ResturentModel = mongoose.model('Resturent', resturentSchema);
export default ResturentModel;













// OR
// const resturentSchema = new mongoose.Schema({

//   name:{
//     type: String,
//     required: true
//   },

//   ImageUrl: {
//     type: String,
//     required: true
//   },

//     rating: {
//         type: Number,
//         min: 0,
//         max: 5
//    },
//     cuisines: {
//         type: String,
//         required: true
//     },
//     deliveryTime: {
//         type: String,
//         required: true
//     }


// })