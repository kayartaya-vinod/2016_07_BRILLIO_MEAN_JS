// server.js

var express = require("express");
var basicAuth = require("basic-auth");
var secureRoute = require("secure-route");
var app = express();
// app.use(express.static("www"));
app.use(secureRoute({
    init: function() {  
    	console.log("this->", this);  	
        var auth = basicAuth(this);
        return this.login(auth.username, auth.password);
    },
    login: function(username, password) {
        if (auth.username === "admin" && auth.password === "12345") {
            return this.authorize({ name: auth.username });
        } else {
            throw new Error("Incorrect username or password.");
        }
    },
    authorize: function(user) {
        this.user = user;
    },
    loggedIn: function() {
        return Boolean(this.user);
    },
    logout: function() {
        delete this.user;
    }
}));
app.get("/", function(req, res, next) {
    res.send(req.user);
});

app.listen(3030, ()=>console.log("Server started"));
console.log("End of server.js script");