var express = require('express')
var app = express()
app.set('view engine', 'jade');
app.get('/home', function(req, res){
	app.set('views', process.argv[3]);
	res.render('index', {date: new Date().toDateString()});
})

app.listen(Number(process.argv[2]))
