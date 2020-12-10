"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define("decorators", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addMetadata = exports.readMetadata = exports.logProperty = exports.logMethod = exports.logClass = void 0;
    function logClass(target) {
        const originalConstructor = target;
        function logClassName(func) {
            console.log("New: " + func.name);
        }
        function instanciate(constructor, ...args) {
            return new constructor(...args);
        }
        const newConstructor = function (...args) {
            logClassName(originalConstructor);
            return instanciate(originalConstructor, ...args);
        };
        newConstructor.prototype = originalConstructor.prototype;
        return newConstructor;
    }
    exports.logClass = logClass;
    function logMethod(target, key, descriptor) {
        const originalMethod = descriptor.value;
        function logFunctionCall(method, args, result) {
            console.log(`Call: ${method}(${args}) => ${result}`);
        }
        descriptor.value = function (...args) {
            const argsStr = args.map((a) => {
                return JSON.stringify(a);
            }).join();
            const result = originalMethod.apply(this, args);
            const resultStr = JSON.stringify(result);
            console.log();
            console.log(`Call: ${key}(${argsStr}) => ${resultStr}`);
            return result;
        };
        return descriptor;
    }
    exports.logMethod = logMethod;
    function logProperty(target, key) {
        let _val = target[key];
        function logPropertyAccess(acces, k, v) {
            console.log(`${acces}: ${k} => ${v}`);
        }
        const getter = function () {
            logPropertyAccess("Get", key, _val);
            return _val;
        };
        const setter = function (newVal) {
            logPropertyAccess("Set", key, newVal);
            _val = newVal;
        };
        if (delete target[key]) {
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    exports.logProperty = logProperty;
    function readMetadata(target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const metadataKey = `_log_${key}_parameters`;
            const indices = target[metadataKey];
            if (Array.isArray(indices)) {
                for (let i = 0; i < args.length; i++) {
                    if (indices.indexOf(i) !== -1) {
                        const arg = args[i];
                        const argStr = JSON.stringify(arg);
                        console.log(`${key} arg[${i}]: ${argStr}`);
                    }
                }
                return originalMethod.apply(this, args);
            }
        };
        return descriptor;
    }
    exports.readMetadata = readMetadata;
    function addMetadata(target, key, index) {
        const metadataKey = `_log_${key}_parameters`;
        if (Array.isArray(target[metadataKey])) {
            target[metadataKey].push(index);
        }
        else {
            target[metadataKey] = [index];
        }
    }
    exports.addMetadata = addMetadata;
});
define("01_class_decorator", ["require", "exports", "decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var class_decorator_demo;
    (function (class_decorator_demo) {
        let Person = class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }
            saySomething(something) {
                return `${this.name} ${this.surname} says: ${something}`;
            }
        };
        Person = __decorate([
            decorators_1.logClass
        ], Person);
        const person = new Person("Michael", "Jackson");
    })(class_decorator_demo || (class_decorator_demo = {}));
});
define("02_method_decorator", ["require", "exports", "decorators"], function (require, exports, decorators_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var method_decorator_demo;
    (function (method_decorator_demo) {
        class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }
            saySomething(something) {
                return `${this.name} ${this.surname} says: ${something}`;
            }
        }
        __decorate([
            decorators_2.logMethod
        ], Person.prototype, "saySomething", null);
        const person = new Person("Michael", "Jackson");
        person.saySomething("Annie, are you ok?");
    })(method_decorator_demo || (method_decorator_demo = {}));
});
define("03_property_decorator", ["require", "exports", "decorators"], function (require, exports, decorators_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var method_decorator_demo;
    (function (method_decorator_demo) {
        class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }
            saySomething(something) {
                return `${this.name} ${this.surname} says: ${something}`;
            }
        }
        __decorate([
            decorators_3.logProperty
        ], Person.prototype, "name", void 0);
        __decorate([
            decorators_3.logProperty
        ], Person.prototype, "surname", void 0);
        const person = new Person("Michael", "Jackson");
        person.saySomething("Annie, are you ok?");
    })(method_decorator_demo || (method_decorator_demo = {}));
});
define("04_parameter_decorator", ["require", "exports", "decorators"], function (require, exports, decorators_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var method_decorator_demo;
    (function (method_decorator_demo) {
        class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }
            saySomething(something) {
                return `${this.name} ${this.surname} says: ${something}`;
            }
        }
        __decorate([
            decorators_4.readMetadata,
            __param(0, decorators_4.addMetadata)
        ], Person.prototype, "saySomething", null);
        const person = new Person("Michael", "Jackson");
        person.saySomething("Annie, are you ok?");
    })(method_decorator_demo || (method_decorator_demo = {}));
});
var decorator_option;
(function (decorator_option) {
    function logClass(option) {
        return function (target) {
            console.log(`Decorating ${target.name} with ${option}`);
        };
    }
    let Person = class Person {
    };
    Person = __decorate([
        logClass("some option")
    ], Person);
})(decorator_option || (decorator_option = {}));
define("06_reflect_metadata", ["require", "exports", "../../../node_modules/reflect-metadata/reflect-metadata"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflect_metadata_demo1;
    (function (reflect_metadata_demo1) {
        function logType(target, key) {
            const type = Reflect.getMetadata("design:type", target, key);
            console.log(`${key} type: ${type.name}`);
        }
        class Demo {
            constructor(attr1) {
                this.attr1 = attr1;
            }
        }
        __decorate([
            logType
        ], Demo.prototype, "attr1", void 0);
    })(reflect_metadata_demo1 || (reflect_metadata_demo1 = {}));
    var reflect_metadata_demo2;
    (function (reflect_metadata_demo2) {
        function logParamTypes(target, key) {
            const types = Reflect.getMetadata("design:paramtypes", target, key);
            const s = types.map((a) => a.name).join();
            console.log(`${key} param types: ${s}`);
        }
        class Foo {
        }
        class Demo {
            doSomething(param1, param2, param3, param4, param5, param6, param7) {
                return 1;
            }
        }
        __decorate([
            logParamTypes
        ], Demo.prototype, "doSomething", null);
    })(reflect_metadata_demo2 || (reflect_metadata_demo2 = {}));
    var reflect_metadata_demo3;
    (function (reflect_metadata_demo3) {
        function logReturntype(target, key) {
            const returnType = Reflect.getMetadata("design:returntype", target, key);
            console.log(`${key} return type: ${returnType.name}`);
        }
        class Demo {
            doSomething2() {
                return "test";
            }
        }
        __decorate([
            logReturntype
        ], Demo.prototype, "doSomething2", null);
    })(reflect_metadata_demo3 || (reflect_metadata_demo3 = {}));
});
define("07_decorator_factory", ["require", "exports", "decorators"], function (require, exports, decorators_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function decoratorFactory(classDecorator, propertyDecorator, methodDecorator, parameterDecorator) {
        return function (...args) {
            const nonNullableArgs = args.filter(a => a !== undefined);
            switch (nonNullableArgs.length) {
                case 1:
                    return classDecorator.apply(this, args);
                case 2:
                    propertyDecorator.apply(this, args);
                    break;
                case 3:
                    if (typeof args[2] === "number") {
                        parameterDecorator.apply(this, args);
                    }
                    else {
                        return methodDecorator.apply(this, args);
                    }
                    break;
                default:
                    throw new Error("Decorators are not valid here!");
            }
        };
    }
    var decorator_factory_demo;
    (function (decorator_factory_demo) {
        const log = decoratorFactory(decorators_5.logClass, decorators_5.logProperty, decorators_5.readMetadata, decorators_5.addMetadata);
        let Person = class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }
            saySomething(something) {
                return `${this.name} ${this.surname} says: ${something}`;
            }
        };
        __decorate([
            log
        ], Person.prototype, "name", void 0);
        __decorate([
            log,
            __param(0, log)
        ], Person.prototype, "saySomething", null);
        Person = __decorate([
            log
        ], Person);
        const person = new Person("Michael", "Jackson");
        person.saySomething("Annie, are you ok?");
    })(decorator_factory_demo || (decorator_factory_demo = {}));
});
//# sourceMappingURL=app.js.map