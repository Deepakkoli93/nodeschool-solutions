var http = require('http')
, async = require('async')

async.reduce(["one", "two", "three"], 0, function(memo, item, callback){
	//console.log(item)
	http.get(process.argv[2]+"?number="+item, function(res){
		var body = ''
		res.setEncoding("utf-8");
		res.on('data', function(chunk){
			body += chunk
		})
		res.on('end', function(){
			 callback(null, memo+Number(body))
		})
	}).on("error", function(err){callback(err)});
}, function(err, result){
	if(err) console.log(err)
	console.log(result)
})