<- (definition) ->
	| typeof define is \function and define.amd? => define [] definition
	| typeof exports is \object => module.exports = definition!
	| otherwise => @Base = definition!

get-fn-name = (fn)->
	if fn.name? then that # real browsers
	else # ie
		fn.to-string!.replace /^function\s+([a-z\$_][a-z\d\$_]*)\(\).+/i \$1 # this is horrible

return class Base
	@extend = (...fns)->
		superklass = this
		class extends this
			for fn in fns
				name = get-fn-name fn
				fn.super$ = ::[name]
				fn.superclass$ = superclass
				(name): fn
			~> super ...

	@meta = (...fns)->
		for fn in fns
			name = get-fn-name fn
			fn.super$ = @[name]
			fn.superclass$ = this
			@[name] = fn
		this

	~> @initialize? ...