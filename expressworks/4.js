var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({entended : false}))
app.post('/form', function(req, res){
	rev = req.body.str.split('').reverse().join('');
	res.end(rev);
})

app.listen(Number(process.argv[2]))
