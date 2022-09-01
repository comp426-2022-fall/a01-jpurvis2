// Require http module
const http = require('http');
// Require fs module
const fs = require('fs');
//const { parseArgs } = require('util');
// Require minimist module (make sure you install this one via npm).
const args = require('minimist')(process.argv.slice(2),{
  string: 'port'
});
// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define a const `port` using the argument from the command line. 
const port = args.port ||process.env.PORT|| 3000;

// Make this condefault to port 3000 if there is no argument given for `--port`.

// Use the fs module to create an arrow function using `fs.readFile`.
// Example: Read a file and change its content and read
// it again using callback-based API.

const fileName = './public/index.html';

fs.readFile(fileName, "utf8", (err,data) => {
  if(err){
    console.error(err)
    return 
  }
  //console.log(fileName)
  //console.log(data)
  console.log(port);
  console.log(args);
  console.log(args.port);
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(data)
    res.end();
  })
  
  server.listen(port, () => {
    console.log(`Server running at port ${port}`)
  })
})
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.

// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.

// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.


// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 




// That's it! You're all done!
