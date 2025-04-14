import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    tax:{type:Number,required:true}
})

console.log(userSchema)

const User = mongoose.model("User",userSchema);
export default User