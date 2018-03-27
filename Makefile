PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

clean:
	# Deletes node_modules, docs, and builds
	nwb clean-module
	rm -r docs

build:
	# Generates builds for multiple target environments:
	# 	- A CommonJS build in lib/
	# 	- An ES6 modules build in es/
	# 	- UMD development and production builds in umd/
	nwb build-web-module

docs:
	# - Generates /docs from jsdoc
	jsdoc -c .jsdoc.json --verbose
	open ./docs/index.html

publish:
	# Prepares and publishes the module to NPM
	$(MAKE) build
	$(MAKE) test
	$(MAKE) docs

	# Bumps package.json version, git commits, tags, and pushes
	npm version $(filter-out $@,$(MAKECMDGOALS)) -m "Releasing v%s"
	git push origin master --follow-tags

	# Publishes to NPM
	npm publish

test:
	# Runs test suite
	nwb test

test-coverage:
	# Generates test coverage report
	nwb test --coverage
	open ./coverage/html/index.html

test-watch:
	# Watches for file changes and re-runs test
	nwb test --server
