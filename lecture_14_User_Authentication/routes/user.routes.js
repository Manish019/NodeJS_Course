import { registerUser} from "../controllers/user.controllers.js";



export function userRoutes(app) {

app.post('/api/register', registerUser) // this is a register user controller function
// app.post('/api/login', loginUser), // this is a login user controller function

}




