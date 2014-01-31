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

var Baz = Base.extend(
	function quux() {
		assert(this instanceof Baz);
		return 5;
	}
).meta(
	function frob() {
		return 6;
	}
);

assert(new Baz().quux() === 5);
assert(Baz.frob() === 6);

var Lorem = Baz.extend(
	function ipsum() {
		return 7;
	}
).meta(
	function dolor() {
		return 8;
	}
);

assert(new Lorem().quux() === 5);
assert(new Lorem().ipsum() === 7);
assert(Lorem.frob() === 6);
assert(Lorem.dolor() === 8);

var Sit = Baz.extend(
	function quux() {
		return quux.super$.apply(this, arguments) + 1;
	}
);

assert(new Sit().quux() === 6);

var Init = Base.extend(
	function initialize(a) {
		this.a = a;
		assert(this instanceof Init);
		assert(initialize.superclass$ === Base);
	}
);

assert(new Init(5).a === 5);

var Sub = Init.extend(
	function initialize(a) {
		initialize.super$.call(this,a * 2);
		assert(this instanceof Sub);
		assert(initialize.superclass$ === Init);
	}
);

assert(new Sub(5).a === 10);

var SubSub = Sub.extend(
	function initialize(a) {
		initialize.super$.call(this,a * 2);
		assert(initialize.superclass$ === Sub);
	}
);

assert(new SubSub(5).a === 20);

function External(a) {
	assert(this instanceof External);
	this.a = a;
}

External.prototype.foo = function(b) {
	assert(this instanceof External);
	return this.a * b;
};

External.prototype.bar = function(b) {
	assert(this instanceof External);
	return this.a + b;
};

var ExternalSub = Base.extend.call(External,
	function foo(b) {
		return foo.super$(b + 2);
	}
);
var e = new ExternalSub(5);
assert(e instanceof ExternalSub);
assert(e instanceof External);
assert(e.a === 5);
assert(e.bar(4) === 9);
assert(e.foo(4) === 30);

var ExternalSubSub = External.extend();
var es = new ExternalSubSub(5);
assert(es instanceof ExternalSubSub);
assert(es instanceof ExternalSub);
assert(es instanceof External);