PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

clean:
	nwb clean-module
	rm -r docs

build:
	nwb build-web-module

docs:
	jsdoc -c .jsdoc.json --verbose
	open ./docs/index.html

publish:
	# Prepares and publishes the module to NPM:
	# - NWB Builds:
	# 	- A CommonJS build in lib/
	# 	- An ES6 modules build in es/
	# 	- UMD development and production builds in umd/
	# - Runs test suite
	# - Generates /docs from jsdoc
	# - Bumps package.json version
	# - Git commit, tag, and push
	# - Publishes to NPM

	$(MAKE) build
	$(MAKE) test
	$(MAKE) docs

	npm version $(filter-out $@,$(MAKECMDGOALS)) -m "Releasing v%s"
	git push origin master --follow-tags

	npm publish

test:
	nwb test

test-coverage:
	nwb test --coverage
	open ./coverage/html/index.html

test-watch:
	nwb test --server
