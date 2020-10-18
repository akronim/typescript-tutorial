var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TUTORIAL = TUTORIAL || {};
// Generic programming allows algorithms to be written in way that allows
// the types to be specified later.
TUTORIAL.genericClasses = (function () {
    // Generic classes
    var DomainId = /** @class */ (function () {
        function DomainId(id) {
            this.id = id;
        }
        Object.defineProperty(DomainId.prototype, "value", {
            get: function () {
                return this.id;
            },
            enumerable: false,
            configurable: true
        });
        return DomainId;
    }());
    var OrderId = /** @class */ (function (_super) {
        __extends(OrderId, _super);
        function OrderId(orderIdValue) {
            return _super.call(this, orderIdValue) || this;
        }
        return OrderId;
    }(DomainId));
    var AccountId = /** @class */ (function (_super) {
        __extends(AccountId, _super);
        function AccountId(accountIdValue) {
            return _super.call(this, accountIdValue) || this;
        }
        return AccountId;
    }(DomainId));
    // Examples of compatibility
    function onlyAcceptsOrderId(orderId) {
        // ...
    }
    function acceptsAnyDomainId(id) {
        // ...
    }
    var accountId = new AccountId("GUID-1");
    var orderId = new OrderId(5);
    // Error: Argument of type 'AccountId' is not assignable to parameter of type 'OrderId'
    // onlyAcceptsOrderId(accountId);
    // OK
    onlyAcceptsOrderId(orderId);
    // OK
    acceptsAnyDomainId(accountId);
    return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
    };
})();
var TUTORIAL = TUTORIAL || {};
// Generic programming allows algorithms to be written in way that allows
// the types to be specified later.
TUTORIAL.genericFunctions = (function () {
    // Generic functions
    function reverse(list) {
        var reversedList = [];
        for (var i = list.length - 1; i >= 0; i--) {
            reversedList.push(list[i]);
        }
        return reversedList;
    }
    var letters = ["a", "b", "c", "d"];
    // d, c, b, a
    var reversedLetters = reverse(letters);
    var numbers = [1, 2, 3, 4];
    // 4, 3, 2, 1
    var reversedNumbers = reverse(numbers);
    return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
    };
})();
var TUTORIAL = TUTORIAL || {};
// Generic programming allows algorithms to be written in way that allows
// the types to be specified later.
TUTORIAL.genericInterfaces = (function () {
    // Generic interfaces
    var CustomerId = /** @class */ (function () {
        function CustomerId(customerIdValue) {
            this.customerIdValue = customerIdValue;
        }
        Object.defineProperty(CustomerId.prototype, "value", {
            get: function () {
                return this.customerIdValue;
            },
            enumerable: false,
            configurable: true
        });
        return CustomerId;
    }());
    var Customer = /** @class */ (function () {
        function Customer(id, name) {
            this.id = id;
            this.name = name;
        }
        return Customer;
    }());
    var CustomerRepository = /** @class */ (function () {
        function CustomerRepository(customers) {
            this.customers = customers;
        }
        CustomerRepository.prototype.getById = function (id) {
            return this.customers[id.value];
        };
        CustomerRepository.prototype.persist = function (customer) {
            this.customers[customer.id.value] = customer;
            return customer.id;
        };
        return CustomerRepository;
    }());
    return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
    };
})();
var TUTORIAL = TUTORIAL || {};
// A type constraint can be used to limit the types that
// a generic function, interface, or class can operate on
TUTORIAL.typeConstraints = (function () {
    var Personalization = /** @class */ (function () {
        function Personalization() {
        }
        // Type constraints are specified using the extends keyword
        Personalization.greet = function (obj) {
            return "Hello " + obj.name;
        };
        return Personalization;
    }());
    var hasName = { name: "John" };
    var result = Personalization.greet(hasName);
    console.log(result);
    return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
    };
})();
