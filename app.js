var FirstNamespace;
(function (FirstNamespace) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log("Logging from FirstNamespace.Example.log()");
        };
        return Example;
    }());
    FirstNamespace.Example = Example;
})(FirstNamespace || (FirstNamespace = {}));
(function (FirstNamespace) {
    var SecondNamespace;
    (function (SecondNamespace) {
        var Example = /** @class */ (function () {
            function Example() {
            }
            Example.prototype.log = function () {
                console.log("Logging from FirstNamespace.SecondNamespace.Example.log()");
            };
            return Example;
        }());
        SecondNamespace.Example = Example;
    })(SecondNamespace = FirstNamespace.SecondNamespace || (FirstNamespace.SecondNamespace = {}));
})(FirstNamespace || (FirstNamespace = {}));
var dotted = new FirstNamespace.SecondNamespace.Example();
dotted.log();
// A namespace creates a context for identifiers, reducing naming collisions 
// in your program and providing a mechanism to organize your code into logical 
// schemes. A namespace adds only one item to the global scope; and this item 
// provides a hierarchical mechanism for accessing everything that is made public 
// within the namespace.
// prefer modules over namespaces !!!
var First;
(function (First) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log("Logging from First.Example.log()");
        };
        return Example;
    }());
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log("Logging from Second.Example.log()");
        };
        return Example;
    }());
    Second.Example = Example;
})(Second || (Second = {}));
var first = new First.Example();
// Logging from First.Example.log()
first.log();
var second = new Second.Example();
// Logging from Second.Example.log()
second.log();
var FirstLevel;
(function (FirstLevel) {
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log("Logging from FirstLevel.Example.log()");
        };
        return Example;
    }());
    FirstLevel.Example = Example;
    // export keyword marks a namespace member as public
    var SecondLevel;
    (function (SecondLevel) {
        var Example = /** @class */ (function () {
            function Example() {
            }
            Example.prototype.log = function () {
                console.log("Logging from FirstLevel.SecondLevel.Example.log()");
            };
            return Example;
        }());
        SecondLevel.Example = Example;
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
var nested = new FirstLevel.SecondLevel.Example();
nested.log();
