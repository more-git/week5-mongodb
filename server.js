var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "./";
var MongoClient = require('mongodb').MongoClient;

connectDB();

function connectDB() {
    http.createServer(function (req, res) {
        var urlObj = url.parse(req.url, true, false);                
        if (req.method == "POST") {
            fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
                MongoClient.connect("mongodb://localhost/",{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
                    var myDB = db.db("week5");
                    var inputCollection = myDB.collection("input");

                    var jsonData = "";
                    req.on('data', function (chunk) {
                        jsonData += chunk;
                    });
                    req.on('end', function () {
                        if (jsonData) {
                            var len = jsonData.toString().length;
                            var substrMsg = jsonData.toString().substr(8, len - 1);
                            var text = '{ "message":"';
                            text += substrMsg;
                            text += '"}';
                            var obj = JSON.parse(text, function (key, value) {
                                return value;
                            });
                            inputCollection.insertOne(obj);
                        }
                    });
                    res.writeHead(200);
                    res.end(data);
                });
            });
        } else {
            fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
                if (err) {  }
                res.writeHead(200);
                res.end(data);
            });
        }
    }).listen(8005);
}
