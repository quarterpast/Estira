(function(){
  var slice$ = [].slice;
  (function(definition){
    switch (false) {
    case !(typeof define === 'function' && define.amd != null):
      return define([], definition);
    case typeof exports !== 'object':
      return module.exports = definition();
    default:
      return this.Base = definition();
    }
  })(function(){
    var getFnName, Base;
    getFnName = function(fn){
      var that;
      if ((that = fn.name) != null) {
        return that;
      } else {
        return fn.toString().replace(/^function\s+([a-z\$_][a-z\d\$_]*)\(\).+/i, '$1');
      }
    };
    return Base = (function(){
      Base.displayName = 'Base';
      var prototype = Base.prototype, constructor = Base;
      Base.extend = function(){
        var fns, superklass;
        fns = slice$.call(arguments);
        superklass = this;
        return (function(superclass){
          var i$, ref$, len$, fn, name, prototype = extend$(import$(constructor, superclass), superclass).prototype;
          for (i$ = 0, len$ = (ref$ = fns).length; i$ < len$; ++i$) {
            fn = ref$[i$];
            name = getFnName(fn);
            fn.super$ = prototype[name];
            fn.superclass$ = superclass;
            prototype[name] = fn;
          }
          function constructor(){
            var this$ = this instanceof ctor$ ? this : new ctor$;
            constructor.superclass.apply(this$, arguments);
            return this$;
          } function ctor$(){} ctor$.prototype = prototype;
          return constructor;
        }(this));
      };
      Base.meta = function(){
        var fns, i$, len$, fn, name;
        fns = slice$.call(arguments);
        for (i$ = 0, len$ = fns.length; i$ < len$; ++i$) {
          fn = fns[i$];
          name = getFnName(fn);
          fn.super$ = this[name];
          fn.superclass$ = this;
          this[name] = fn;
        }
        return this;
      };
      function Base(){
        var this$ = this instanceof ctor$ ? this : new ctor$;
        if (typeof this$.initialize === 'function') {
          this$.initialize.apply(this$, arguments);
        }
        return this$;
      } function ctor$(){} ctor$.prototype = prototype;
      return Base;
    }());
  });
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
