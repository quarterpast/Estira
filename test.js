var Base = require('./'),
    test = require('tape');


test('estira', function(t) {
	var Foo = Base.extend();
	var foo = new Foo();

	t.ok(foo instanceof Foo);
	t.ok(foo instanceof Base);

	var Bar = Foo.extend();
	var bar = new Bar();

	t.ok(bar instanceof Bar);
	t.ok(bar instanceof Foo);
	t.ok(bar instanceof Base);

	var Baz = Base.extend(
		function quux() {
			t.ok(this instanceof Baz);
			return 5;
		}
	).meta(
		function frob() {
			return 6;
		}
	);

	t.ok(new Baz().quux() === 5);
	t.ok(Baz.frob() === 6);

	var Lorem = Baz.extend(
		function ipsum() {
			return 7;
		}
	).meta(
		function dolor() {
			return 8;
		}
	);

	t.ok(new Lorem().quux() === 5);
	t.ok(new Lorem().ipsum() === 7);
	t.ok(Lorem.frob() === 6);
	t.ok(Lorem.dolor() === 8);

	var Sit = Baz.extend(
		function quux() {
			return quux.super$.apply(this, arguments) + 1;
		}
	);

	t.ok(new Sit().quux() === 6);

	var Init = Base.extend(
		function initialize(a) {
			this.a = a;
			t.ok(this instanceof Init);
			t.ok(initialize.superclass$ === Base);
		}
	);

	t.ok(new Init(5).a === 5);

	var Sub = Init.extend(
		function initialize(a) {
			initialize.super$.call(this,a * 2);
			t.ok(this instanceof Sub);
			t.ok(initialize.superclass$ === Init);
		}
	);

	t.ok(new Sub(5).a === 10);

	var SubSub = Sub.extend(
		function initialize(a) {
			initialize.super$.call(this,a * 2);
			t.ok(initialize.superclass$ === Sub);
		}
	);

	t.ok(new SubSub(5).a === 20);

	function External(a) {
		t.ok(this instanceof External);
		this.a = a;
	}

	External.prototype.foo = function(b) {
		t.ok(this instanceof External);
		return this.a * b;
	};

	External.prototype.bar = function(b) {
		t.ok(this instanceof External);
		return this.a + b;
	};

	var ExternalSub = Base.extend.call(External,
		function foo(b) {
			return foo.super$(b + 2);
		}
	);
	var e = new ExternalSub(5);
	t.ok(e instanceof ExternalSub);
	t.ok(e instanceof External);
	t.ok(e.a === 5);
	t.ok(e.bar(4) === 9);
	t.ok(e.foo(4) === 30);

	var ExternalSubSub = ExternalSub.extend(
		function initialize(a) {
			initialize.super$(a * 2);
		}
	);
	var es = new ExternalSubSub(5);
	t.ok(es.a === 10);
	t.ok(es instanceof ExternalSubSub);
	t.ok(es instanceof ExternalSub);
	t.ok(es instanceof External);

	t.end();
});