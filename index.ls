<- (definition) ->
	| typeof define is \function and define.amd? => define [] definition
	| typeof exports is \object => module.exports = definition!
	| otherwise => @Base = definition!

return class Base
	@extend = (methods)->
		class extends this
			import Base
			initialize: ->
				if super? then super ...
				else superclass ...
			for let name, fn of methods
				super$ = ::[name]
				fn.superclass$ = superclass
				::[name] = ->
					fn.super$ = ~> super$ ...
					fn ...
			~> @initialize ...

	@meta = (methods)->
		for let name, fn of methods
			super$ = @[name]
			fn.superclass$ = this
			@[name] = ->
				fn.super$ = ~> super$ ...
				fn ...
		this

	initialize: ->