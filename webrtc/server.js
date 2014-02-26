var http = require('http');
var express = require('express');

var expressApp = express(); 
expressApp.configure(function(){
	expressApp.use(express.static(__dirname));
});
expressApp.listen(2013);

