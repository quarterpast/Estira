(function(){
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
    var Base;
    return Base = (function(){
      Base.displayName = 'Base';
      var prototype = Base.prototype, constructor = Base;
      Base.extend = function(methods){
        return (function(superclass){
          var i$, prototype = extend$(import$(constructor, superclass), superclass).prototype;
          import$(constructor, Base);
          prototype.initialize = function(){
            if (superclass.prototype.initialize != null) {
              return superclass.prototype.initialize.apply(this, arguments);
            } else {
              return superclass.apply(this, arguments);
            }
          };
          for (i$ in methods) {
            (fn$.call(constructor, i$, methods[i$]));
          }
          function constructor(){
            var this$ = this instanceof ctor$ ? this : new ctor$;
            this$.initialize.apply(this$, arguments);
            return this$;
          } function ctor$(){} ctor$.prototype = prototype;
          return constructor;
          function fn$(name, fn){
            var super$;
            super$ = prototype[name];
            fn.superclass$ = superclass;
            prototype[name] = function(){
              var this$ = this;
              fn.super$ = function(){
                return super$.apply(this$, arguments);
              };
              return fn.apply(this, arguments);
            };
          }
        }(this));
      };
      Base.meta = function(methods){
        var i$;
        for (i$ in methods) {
          (fn$.call(this, i$, methods[i$]));
        }
        return this;
        function fn$(name, fn){
          var super$;
          super$ = this[name];
          fn.superclass$ = this;
          this[name] = function(){
            var this$ = this;
            fn.super$ = function(){
              return super$.apply(this$, arguments);
            };
            return fn.apply(this, arguments);
          };
        }
      };
      prototype.initialize = function(){};
      function Base(){}
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
