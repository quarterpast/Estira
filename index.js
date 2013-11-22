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
    var Estira;
    return Estira = (function(){
      Estira.displayName = 'Estira';
      var prototype = Estira.prototype, constructor = Estira;
      Estira.extend = function(proto, meta){
        var super$;
        super$ = this.prototype;
        return (function(superclass){
          var prototype = extend$(import$(constructor, superclass), superclass).prototype;
          importAll$(prototype, arguments[1]);
          function constructor(){
            var this$ = this instanceof ctor$ ? this : new ctor$;
            constructor.superclass.apply(this$, arguments);
            this$.super$ = super$;
            return this$;
          } function ctor$(){} ctor$.prototype = prototype;
          import$(constructor, meta);
          return constructor;
        }(this, proto));
      };
      function Estira(){
        var this$ = this instanceof ctor$ ? this : new ctor$;
        if (typeof this$.initialize === 'function') {
          this$.initialize.apply(this$, arguments);
        }
        return this$;
      } function ctor$(){} ctor$.prototype = prototype;
      return Estira;
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
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
