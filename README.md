# week5-mongo

- start:
```
node something.js
```

- dependencies:
```
node_modules/ 
accepts			hooks-fixed		path-to-regexp
array-flatten		http-errors		process-nextick-args
async			iconv-lite		proxy-addr
bl			inherits		qs
bluebird		ipaddr.js		range-parser
body-parser		isarray			raw-body
bson			kareem			readable-stream
buffer-shims		lodash			regexp-clone
bytes			lodash.get		require_optional
content-disposition	media-typer		resolve-from
content-type		memory-pager		safe-buffer
cookie			merge-descriptors	safer-buffer
cookie-signature	methods			saslprep
core-util-is		mime			semver
debug			mime-db			send
denque			mime-types		serve-static
depd			mongodb			setprototypeof
destroy			mongodb-core		sliced
ee-first		mongoose		sparse-bitfield
encodeurl		mpath			statuses
es6-promise		mpromise		string_decoder
escape-html		mquery			toidentifier
etag			ms			type-is
express			muri			unpipe
finalhandler		negotiator		util-deprecate
forwarded		on-finished		utils-merge
fresh			parseurl		vary
```

## package.json
```
"dependencies": {
    "bootstrap": "^4.5.2",
    "jquery": "^3.5.1",
    "mongodb": "^3.6.2",
    "socket.io": "^2.3.0"
  },
```

- Open http://localhost:8005/index.html in a web browser

## mongo cli
```
> show dbs
admin      0.000GB
astro      0.000GB
config     0.000GB
local      0.000GB
newDB      0.000GB
node-demo  0.000GB
week5      0.000GB
> use week5
switched to db week5
> db.input.find()
```
