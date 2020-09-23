var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "./";
var MongoClient = require('mongodb').MongoClient;

connectDB();

function addObject(collection, object){
    if (object && collection) {
        collection.insert(object, function(err, result){
            if(!err){
                console.log("Inserted : ");
                console.log(result);
            }
        });
    }
}
function connectDB() {
    MongoClient.connect("mongodb://localhost/",{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
        var myDB = db.db("week5");
        myDB.dropCollection("input");
        myDB.createCollection("input", function(err, nebulae){
            http.createServer(function (req, res) {
                var urlObj = url.parse(req.url, true, false);
                fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
                    if (err) {  }
                    var jsonData = "";
                    req.on('data', function (chunk) {
                        jsonData += chunk;
                    });
                    req.on('end', function () {
                        if (jsonData) {
                            var len = jsonData.toString().length;
                            var substrMsg = jsonData.toString().substr(8, len-1);
                            addObject(nebulae, {message:substrMsg});

                        }
                    });
                    res.writeHead(200);
                    res.end(data);
                });
            }).listen(8005);
        });
    });
}
