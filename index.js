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
      var that, ident;
      if ((that = fn.name) != null) {
        return that;
      } else {
        ident = '[a-z\\$_][a-z\\d\\$_]*';
        return fn.toString().split('\n')[0].replace(RegExp('^function\\s+(' + ident + ')\\(.*\\).+$', 'i'), '$1');
      }
    };
    return Base = (function(){
      Base.displayName = 'Base';
      var prototype = Base.prototype, constructor = Base;
      Base.extend = function(){
        var fns;
        fns = slice$.call(arguments);
        return (function(superclass){
          var i$, len$, prototype = extend$(import$(constructor, superclass), superclass).prototype;
          import$(constructor, Base);
          prototype.initialize = function(){
            if (superclass.prototype.initialize != null) {
              return superclass.prototype.initialize.apply(this, arguments);
            } else {
              return superclass.apply(this, arguments);
            }
          };
          for (i$ = 0, len$ = fns.length; i$ < len$; ++i$) {
            (fn$.call(constructor, fns[i$]));
          }
          function constructor(){
            var this$ = this instanceof ctor$ ? this : new ctor$;
            this$.initialize.apply(this$, arguments);
            return this$;
          } function ctor$(){} ctor$.prototype = prototype;
          return constructor;
          function fn$(fn){
            var name, super$;
            name = getFnName(fn);
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
      Base.meta = function(){
        var fns, i$, len$;
        fns = slice$.call(arguments);
        for (i$ = 0, len$ = fns.length; i$ < len$; ++i$) {
          (fn$.call(this, fns[i$]));
        }
        return this;
        function fn$(fn){
          var name, super$;
          name = getFnName(fn);
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
