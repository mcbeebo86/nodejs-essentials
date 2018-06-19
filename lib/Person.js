var util = require('util');
var EventEmitter = require('events').EventEmitter;

//In JS, objects are functions
var Person = function(name) {
    this.name = name;
};

//util.inherits function is a way to attach an object 
//  to a prototype of an existing object

util.inherits(Person, EventEmitter);

module.exports = Person;