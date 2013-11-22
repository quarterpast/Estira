[Livescript](http://livescript.com) has a pretty sweet class system. Shame we can't use it in JS-land.

**OR CAN WE.**

Estira
======

```javascript
const Base = require('estira');

var Foo = Base.extend({
  initialize: function(bar) {
    this.bar = bar;
  },
  frob: function(baz) {
    return this.bar + baz;
  }
});

var foo = new Foo("hello ");
foo.frob("world"); //⇒ "hello world"
```

API
---

### `Base = require('estira')`

Base class with the bare minimal needed for inheritance. Extend it, it doesn't do much on its own.

### `Subclass = Superclass.extend(protoProps, classProps)`

Returns a prototypal subclass of `Superclass`, inheriting `Superclass`'s instance and class properties, extended with `protoProps` and `classProps`. If `protoProps` contains a method called `initialize`, it is used as `Subclass`'s constructor. If `initialize` is omitted, it delegates to the parent class' constructor.

### `this.super$`

Refers to the prototype of the parent class. Lets you call super methods like

```javascript
var Superclass = Base.extend({
  quux: function() {
    return "hello";
  }
});
var Subclass = Superclass.extend({
  quux: function() {
    return this.super$.quux() + " world";
  }
})
```

Licence
-------
[MIT](/licence.md). &copy; 2013 Matt Brennan.