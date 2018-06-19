var Person = require('./lib/Person');

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(saying) {
    console.log(`${this.name} -> ${saying}`);
});

ben.on('speak', function(saying) {
    console.log(`${this.name}: ${saying}`);
});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone than to be in bad company.");