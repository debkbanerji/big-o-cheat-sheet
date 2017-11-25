var express = require("express");
var os = require('os');
const path = require('path');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;
// var database = process.env.DATABASE || db;
// console.log("Database: " + database);
/*
 To set a port other than 3000:
 in Unix:

 $ PORT=1234 node server.js

 in Windows:

 set PORT=1234
 node server.js
 */

var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            console.log(ifname, iface.address);
        }
        ++alias;
    });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use("/server.js",function (req, res, next) {
//     res.redirect("/")
// });

app.use(express.static(path.join(__dirname)));

app.all('*', function (req, res) {
    res.redirect("/");
});

app.listen(port, function () {
    console.log('listening on port ' + port);
    // console.log('press Ctrl + C to shut down server');
});
