import User from "../models/user.js";




export const submitUser = async (req , res) => {
    const { name,age,tax } = req.body;

    console.log(req.body)

    try{
        const user = new User({name,age,tax});
        await user.save();
        // res.redirect("/view.html");
        res.status(200).json({ message: "User saved successfully" }); 
    } catch (error) {
        console.error("❌ Error saving user:", error);
        res.status(500).send("Error saving user");
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
};

export const incrementTax = async (req, res) => {
    const { id } = req.params; // Get user ID from the request parameters
    try {
        // Find user by ID and increment tax
        const updatedUser = await User.findByIdAndUpdate(id, { $inc: { tax: 1 } }, { new: true });
        
        // If the user is not found, return an error
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the updated user
        res.json(updatedUser);
    } catch (error) {
        console.error("❌ Error updating tax:", error);
        res.status(500).send("Error updating tax");
    }
};

export const decrementTax = async (req, res) =>{
    const { id } = req.params;
    try {
          // Find user by ID and decrement tax
        const updatedUser = await User.findByIdAndUpdate(id, { $inc: { tax: -1 } }, { new: true });
        
        // If the user is not found, return an error
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the updated user
        res.json(updatedUser);
        
    }catch (error) {
        console.error("❌ Error updating tax:", error);
        res.status(500).send("Error updating tax");
    }
}