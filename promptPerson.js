var readline = require('readline');
var util = require('util');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    sayings: []
};

rl.question("What is the name of a real person? \n", function(answer) {
    util.log(answer);
    realPerson.name = answer;

    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying) {
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exis' to leave) `);
            rl.prompt();

            util.log(saying.trim());
            realPerson.sayings.push(saying.trim());
        }
    });
});

rl.on('close', function() {
    util.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});