import express from 'express';
import { getMe, login, logout, signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';
//when the control is forwarded to this file the router object decides where the request must be forwarded based on the matching endpoint i.e. which piece of code must be executed based on matching endpoint.
//below we have created a router object
//and endpoint is just the address or location in our website, it decides which page is show.
const router = express.Router();

router.get("/me", protectRoute,getMe); //route to get the currently authenticated user
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;