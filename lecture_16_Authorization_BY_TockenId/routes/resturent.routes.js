import { createResturent, deleteResturent, fetchResturents, updateResturent } from "../controllers/resturent.controllers.js"
import { verifyToken } from "../middleware/verify.js"


export function resturentRoutes(app) {
app.get('/api/resturents', verifyToken, fetchResturents), // this is a Show The Resturent controller function
app.post('/api/resturent', createResturent), //ths is a create Resturent controller function
app.put('/api/resturent/:id', updateResturent) // this is a update controller function
app.delete('/api/resturent/:id', deleteResturent )// this is a delete controller function
}




