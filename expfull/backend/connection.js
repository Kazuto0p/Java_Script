import mongoose from "mongoose";


const connectDb = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Taxing")
        console.log("DataBase is connected")
    } catch {
        console.log("error");
        
    }
}

export default connectDb