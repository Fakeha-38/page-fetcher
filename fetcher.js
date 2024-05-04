const request = require('request');
const fs = require('fs');
let args = process.argv;
let slicedArgs = args.slice(2);

let url = slicedArgs[0];
let filePath = slicedArgs[1];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let content = body;
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log(`The data from ${url} has been successfully written in the file ${filePath}`);
    }
  });
});

