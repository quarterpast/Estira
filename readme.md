[Livescript](http://livescript.com) has a pretty sweet class system. Shame we can't use it in JS-land.

**OR CAN WE.**

Estira
======

```javascript
const Base = require('estira');

var Foo = Base.extend(
  function initialize(bar) {
    this.bar = bar;
  },
  function frob(baz) {
    return this.bar + baz;
  }
);

var foo = new Foo("hello ");
foo.frob("world"); //⇒ "hello world"
```

API
---

### `Base = require('estira')`

Base class with the bare minimal needed for inheritance. Extend it, it doesn't do much on its own.

### `Subclass = Superclass.extend(...fns)`

Returns a prototypal subclass of `Superclass`, inheriting `Superclass`'s instance and class properties, extended with the named functions passed in. If `fns` contains a method called `initialize`, it is used as `Subclass`'s constructor. If `initialize` is omitted, it delegates to the parent class' constructor.

### `Class.meta(...fns)`

Extends the "metaclass" of `Class`. Lets you add static methods, which may be inherited.

### `fn.super$`

Refers to the parent class implementation of the function. Lets you call super methods like

```javascript
var Superclass = Base.extend(
  function quux() {
    return "hello";
  }
);
var Subclass = Superclass.extend(
  function quux() {
    return quux.super$() + " world";
  }
);
```

Extending third-party classes
-----------------------------
If you want to extend a class that doesn't derive from `Base` (e.g. `EventEmitter`), you can shoehorn estira onto it using `Sub = Base.extend.call(EventEmitter, ...methods)`. Classes created this way *can* be further extended, and `super$` calls still work.


Woah there, tiger
-----------------
Estira relies on the **totally non-standard** `Function.prototype.name`, with fallback to the **totally implementation-dependent** `Function.prototype.toString` along with [some gnarly regexes](/index.ls#L12). Please be careful.

Licence
-------
[MIT](/licence.md). &copy; 2013 Matt Brennan.
