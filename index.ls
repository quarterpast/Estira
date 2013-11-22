module.exports = class Estira
	@extend = (proto, meta)->
		super$ = @::
		class extends this implements proto
			~>
				super ...
				import {super$}
			import meta

	~> @initialize? ...