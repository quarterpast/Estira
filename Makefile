all: index.js

%.js: %.ls
	node_modules/.bin/lsc -pc $(LS_OPTS) "$<" > "$@"

.PHONY: test
test: all
	node test.js