var express = require('express')
var app = express()

app.get('/books', function(req, res){
	require('fs').readFile(process.argv[3], function(err, data){
		if(err) return res.sendStatus(500)
		res.send(JSON.parse(data))
	})
})
app.listen(process.argv[2])