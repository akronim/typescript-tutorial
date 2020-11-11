var Bad1;
(function (Bad1) {
    class Foo {
    }
    class Bar {
        constructor() {
            this.foo = new Foo();
        }
    }
    class Foobar {
        constructor() {
            this.foo = new Foo();
            this.bar = new Bar();
        }
    }
})(Bad1 || (Bad1 = {}));
var Better;
(function (Better) {
    class Foo {
    }
    class Bar {
        constructor(foo) { }
    }
    class Foobar {
        constructor(foo, bar) { }
    }
    const foobar = new Foobar(new Foo(), new Bar(new Foo()));
})(Better || (Better = {}));
