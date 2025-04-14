import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDb from "./connection.js";
import router from "./routes/router.js";


const app = express()




const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)


const fname = path.join(__dirname,'..','frontend')
app.use(express.static(fname))
app.use(express.json()); // 👈 this is the missing line
app.use(express.urlencoded({ extended: true })); 

// app.get("/", (req, res) => {
//     res.sendFile(path.join(fname, "index.html"));
// });

app.use('/',router)

// Add this route in your server file (e.g., `app.js` or `index.js`)
// app.get("/users", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "frontend", "view.html"));
// });



await connectDb();
const port = 4000;
app.listen(port, ()=>{
    console.log("server is running http://localhost:4000")
})