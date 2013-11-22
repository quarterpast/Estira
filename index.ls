<- (definition) ->
	| typeof define is \function and define.amd? => define [] definition
	| typeof exports is \object => module.exports = definition!
	| otherwise => @Base = definition!

return class Estira
	@extend = (proto, meta)->
		super$ = @::
		class extends this implements proto
			~>
				super ...
				import {super$}
			import meta

	~> @initialize? ...