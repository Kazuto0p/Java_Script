//core module
// var http = require("http")

// http.createServer(function (req,res){
//     res.write('Hello from HTTP Module ')
//     res.end();
// }).listen("8080");


// local module
// const sayHello = require('./modules');
// sayHello();

var os = require('os')
console.log(os.release());
console.log(os.version());
console.log(os.type())
console.log(os.arch())
console.log(os.platform())
console.log(os.uptime())
console.log(os.userInfo())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus())
console.log(os.networkInterfaces())
