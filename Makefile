all: reload min


# for debugging
reload: src/reload.js
	cat $^ > dist/reload.js

min: reload
	uglifyjs dist/reload.js > dist/reload.min.js
