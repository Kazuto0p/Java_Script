const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require("querystring");
const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017/");

async function connectDB() {
    await client.connect();
    console.log("Connected to database");
}
connectDB();

const server = http.createServer(async (req, res) => {
    const db = client.db("Contacts");
    const collection = db.collection("data");
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(fs.readFileSync(__dirname + "/../frontend/index.html"));
    } 
    else if (parsedUrl.pathname === '/add') {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(fs.readFileSync(__dirname + "/../frontend/add.html"));
    } 
    else if (parsedUrl.pathname === "/submit" && req.method == "POST") {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", async () => {
            console.log("Received Data:", body);
            const params = queryString.parse(body);
            console.log("Parsed Data:", params);
            await collection.insertOne({ name: params.name, phone: params.phone });
            // res.writeHead(201, { "Content-Type": "text/html" });
            // res.end(fs.readFileSync("../frontend/index.html"));
            res.writeHead(302, { 'Location': '/' });
            res.end("Successfully resived data")
        });
    }
    else if (parsedUrl.pathname === "/getdata" && req.method === "GET") {
        const data = await collection.find().toArray();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    }
    else if (parsedUrl.pathname.startsWith("/getdata/") && req.method === "GET") {
        const id = parsedUrl.pathname.split("/")[2];
        try {
            const contact = await collection.findOne({ _id: new ObjectId(id) });
            if (!contact) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Contact not found" }));
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(contact));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Failed to fetch contact" }));
        }
    }
    else if (parsedUrl.pathname === '/update.html') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(fs.readFileSync(__dirname + "/../frontend/update.html"));
    }
    
    else if (parsedUrl.pathname.startsWith("/update/") && req.method === "PUT") {
        const id = parsedUrl.pathname.split("/")[2];
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", async () => {
            try {
                const params = JSON.parse(body);
                await collection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { name: params.name, phone: params.phone } }
                );
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Contact updated successfully" }));

                if (res.ok) {
                    alert("Contact updated successfully!");
                    window.location.href = "http://localhost:8000/"; 
                }
            } catch (error) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Failed to update contact" }));
            }
        });
    }
    else if (parsedUrl.pathname.startsWith("/delete/") && req.method === "DELETE") {
        const id = parsedUrl.pathname.split("/")[2];
        try {
            await collection.deleteOne({ _id: new ObjectId(id) });
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Contact deleted successfully" }));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Failed to delete contact" }));
        }
    }
});

server.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
