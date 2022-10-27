"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'JOJO';
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person();
console.log(person.getName);
