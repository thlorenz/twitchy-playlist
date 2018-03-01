BIN=./node_modules/.bin
BUDO=$(BIN)/budo
BROWSERIFY=$(BIN)/browserify

EXCLUDE_MODULES=
ENTRY=client/main.js
OUTPUT=build/bundle.js
PORT=-p 9977

CSS=--css client/main.css
TITLE=--title 'twitchy-playlist'

watch:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) $(CSS) $(TITLE) $(PORT) --live -- -d

watch-noreload:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) $(CSS) $(TITLE) $(PORT) -- -d

watch-raw:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) $(CSS) $(TITLE) $(PORT) --live

bundle:
	$(BROWSERIFY) -d $(ENTRY) -o $(OUTPUT)
