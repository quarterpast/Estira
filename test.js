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

var Sit = Baz.extend({
	quux: function() {
		return this.super$.quux.apply(this, arguments) + 1;
	}
});

assert(new Sit().quux() === 6);

var Init = Base.extend({
	initialize: function(a) {
		this.a = a;
	}
});

assert(new Init(5).a === 5);

var Sub = Init.extend({
	initialize: function(a) {
		this.super$.initialize.call(this, a * 2);
	}
});

assert(new Sub(5).a === 10);
