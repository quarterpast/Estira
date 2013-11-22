var Base = require('./'),
    assert = require('better-assert');

var Foo = Base.extend();
var foo = new Foo();

assert(foo instanceof Foo);
assert(foo instanceof Base);

var Bar = Foo.extend();
var bar = new Bar();

assert(bar instanceof Bar);
assert(bar instanceof Foo);
assert(bar instanceof Base);

var Baz = Base.extend({
	quux: function() {
		return 5;
	}
}, {
	frob: function() {
		return 6;
	}
});

assert(new Baz().quux() === 5);
assert(Baz.frob() === 6);

var Lorem = Baz.extend({
	ipsum: function() {
		return 7;
	}
},{
	dolor: function() {
		return 8;
	}
});

assert(new Lorem().quux() === 5);
assert(new Lorem().ipsum() === 7);
assert(Lorem.frob() === 6);
assert(Lorem.dolor() === 8);