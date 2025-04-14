import express from "express";
import { submitUser,getAllUsers,incrementTax, decrementTax } from "../controller/controller.js";
// import User from "../models/user.js";
const router = express.Router();


router.post('/submit',submitUser)
router.get('/users',getAllUsers)

// Call the controller's incrementTax function
router.patch('/users/:id', incrementTax);
router.patch('/users/:id/decrement', decrementTax);

// router.patch('/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedUser = await User.findByIdAndUpdate(id, { $inc: { tax: 1 } }, { new: true });
//         res.json(updatedUser);
//     } catch (error) {
//         console.error("❌ Error updating tax:", error);
//         res.status(500).send("Error updating tax");
//     }
// });


export default router