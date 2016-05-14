var http = require('http')
var url = require('url')
var server = http.createServer(function(req, res){
	if(req.method != 'GET')
		return res.end('not a GET man\n')
	res.writeHead(200, {'Content-Type' : 'application/json'})
	urlstuff = url.parse(req.url, true)
	if(urlstuff.pathname == '/api/parsetime')
	{
		datestring = urlstuff.query.iso
		date = new Date(datestring)
		res.end(JSON.stringify({"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()}))
	}
	else if (urlstuff.pathname = '/api/unixtime')
	{
		datestring = urlstuff.query.iso
		date = new Date(datestring)
		res.end(JSON.stringify({'unixtime' : date.getTime()}))
	}
	else
	{
		res.writeHead(404)
		res.end()
	}

})
server.listen(Number(process.argv[2]))