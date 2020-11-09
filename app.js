var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("defaultExport", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Yacht = (function () {
        function Yacht(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Yacht;
    }());
    exports.default = Yacht;
});
define("exportsObject", ["require", "exports"], function (require, exports) {
    "use strict";
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    }());
    return Ferry;
});
define("dynamicModuleLoading", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var condition = true;
    if (condition) {
        var ferry = require("./exportsObject");
        var myFerry = new ferry("", "", 0);
    }
});
define("modules", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ferry = void 0;
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    }());
    exports.Ferry = Ferry;
    var defaultDisplacement = 4000;
    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    }());
});
define("importing", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dock = void 0;
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        Dock.prototype.print = function (text) {
            console.log(text);
        };
        return Dock;
    }());
    exports.Dock = Dock;
    new Dock().print("DOCK");
});
define("importingDefault", ["require", "exports", "defaultExport"], function (require, exports, defaultExport_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    defaultExport_1 = __importDefault(defaultExport_1);
    var yacht = new defaultExport_1.default('The Sea Princess', 'Tadley', 150);
});
define("importingExportObject", ["require", "exports", "exportsObject"], function (require, exports, Ferry) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ferry = new Ferry('Dartmouth Ferry', 'Dartmouth', 580);
});
define("importingWithAlias", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dock = void 0;
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        Dock.prototype.print = function (text) {
            console.log(text);
        };
        return Dock;
    }());
    exports.Dock = Dock;
    new Dock().print("DOCK");
});
define("reExporting", ["require", "exports", "modules"], function (require, exports, modules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(modules_1, exports);
});
//# sourceMappingURL=app.js.map