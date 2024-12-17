import express from "express";
import {UserRegistration, Login, ReadSignleProfile, ReadAllProfile, UpdateSingleUser,  DeleteSingleUser} from "../app/controllers/UserController.js"

import authMiddleware from "../app/middlewares/AuthMiddleware.js"

const router = express.Router();

// Registration
router.post("/Registration", UserRegistration)

// Login
router.post("/Login", Login)

// Read Single Profile
router.get("/ReadSignleProfile/:id", authMiddleware, ReadSignleProfile)

// Read All User Profile
router.get("/ReadAllProfile", authMiddleware, ReadAllProfile)

// Signle User Profile Update
router.post("/UpdateSingleUser/:id", authMiddleware, UpdateSingleUser)

// Delete Single User
router.post("/DeleteSingleUser/:id", authMiddleware, DeleteSingleUser)


export default router