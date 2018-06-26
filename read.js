var fs = require('fs');

//var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");
//var contents = fs.readFileSync("./lib/sayings.md");

fs.readFile("./lib/sayings.md", "UTF-8", function(err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});

console.log("Reading file...");