var express = require('express');
var url = require('url');
var restler= require('restler');
var util= require('util');

var app = express(); 

app.listen(8000);

var tweets = []

app.get('/', function(req, res) { 
	res.send('AT&T OAuth Test...')
})

app.get('/redirect', function(req,res) { 
	var authorize= 'https://api.att.com/oauth/authorize?'
	+'client_id=7rxkasvlp0u3vxcwrbqyxmrtydjj3gtu&'
	+'scope=MIM,IMMN&'
	+'redirect_uri='
	+ encodeURIComponent('http://localhost');

	res.redirect(authorize);
});

app.get('/token', function(req,res) { 
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var code= query.code;
	console.log('Received code:' + code);

	// use code to get an access token
	var jsonData= { client_id:'7rxkasvlp0u3vxcwrbqyxmrtydjj3gtu',
		  			client_secret: '3oy59mfgl2giszod4pdwe9vwjm7uy5jl',
		  			grant_type: 'authorization_code',
		  			code: code
					};
	var options= { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};

	restler.postJson('https://api.att.com/oauth/token', 
					 jsonData, options).on('complete', function(data, response){
		var accessToken= util.inspect(data);
		console.log(accessToken);

		res.end('Received code:'+ code 
				+ '\n\nAccess Token:\n' + accessToken);
	});
});