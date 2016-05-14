var net = require('net')
var port = Number(process.argv[2])
var server = net.createServer(function(socket){
	var date = new Date()
	year = date.getFullYear()
	month = date.getMonth()+1
	if(month < 10)
	{
		month = "0"+month
	}
	day = date.getDate()
	if(day < 10)
	{
		day = "0"+day
	}
	hours = date.getHours()
	minutes = date.getMinutes()
	var s = year+"-"+month+"-"+day+" "+hours+":"+minutes+'\n'
	console.log(year)
	socket.end(s)
})
server.listen(port)