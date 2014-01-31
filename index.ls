<- (definition) ->
	| typeof define is \function and define.amd? => define [] definition
	| typeof exports is \object => module.exports = definition!
	| otherwise => @Base = definition!

get-fn-name = (fn)->
	if fn.name? then that # real browsers
	else # ie
		ident = /[a-z\$_][a-z\d\$_]*/$
		fn.to-string!
		.split '\n' .0
		.replace //^function\s+(#ident)\(.*\).+$//i \$1 # this is horrible

return class Base
	@extend = (...fns)->
		class extends this
			import Base
			for let fn in fns
				name = get-fn-name fn
				if name is \initialize
					fn.super$ = ~> superclass ...&

				else
					super$ = ::[name]
					fn.superclass$ = superclass
					::[name] = ->
						fn.super$ = ~> super$ ...
						fn ...
			~> @initialize? ...

	@meta = (...fns)->
		for let fn in fns
			name = get-fn-name fn
			super$ = @[name]
			fn.superclass$ = this
			@[name] = ->
				fn.super$ = ~> super$ ...
				fn ...
		this

	~> @initialize? ...