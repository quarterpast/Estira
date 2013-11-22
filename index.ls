module.exports = class Estira
	@extend = (proto, meta)->
		class extends this implements proto
			~> super ...
			import meta

	~> @initialize? ...