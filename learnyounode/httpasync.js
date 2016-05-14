var http = require('http')
var concatStream = require('concat-stream')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var count = 0
var data1 = ""
var data2 = ""
var data3 = ""
http.get(url1, function(response){
	response.pipe(concatStream(function(data){
		data1 = data.toString()
		count = count + 1
		if(count === 3)
		{
			console.log(data1)
			console.log(data2)
			console.log(data3)
		}
	}))
})
http.get(url2, function(response){
	response.pipe(concatStream(function(data){
		data2 = data.toString()
		count = count + 1
		if(count === 3)
		{
			console.log(data1)
			console.log(data2)
			console.log(data3)
		}
	}))
})
http.get(url3, function(response){
	response.pipe(concatStream(function(data){
		data3 = data.toString()
		count = count + 1;
		if(count === 3)
		{
			console.log(data1)
			console.log(data2)
			console.log(data3)
		}
	}))
})

