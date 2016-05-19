var http = require('http')
, async = require('async')

var hostname = process.argv[2]
var pno = Number(process.argv[3])
var url = "http://" + hostname + ":" +pno
//console.log(url)
//console.log(pno)

function sendRequest(id, next){
	var post_data = JSON.stringify({
		"user_id" : id
	});

	var opts = {
		hostname: hostname,
		path :'/users/create',
		method : 'POST',
		port : pno,
		headers : {
			'Content-type' : 'application/x-www-form-urlencoded',
			'Content-length' : Buffer.byteLength(post_data)
		}
	};
	var body = ''
	var req = http.request(opts, function(res){
		res.on('data', function(){
		})
		res.on('end', function(){
			 next()
		})
	})
	//req.on("error", next);
	req.write(post_data);
	req.end();
}



async.series({
	requestOne : function(cb){
		async.times(5, function(n, next){
			sendRequest(n+1, function(){next();});
		}, function() {cb(null, "done")})
	}
	
,
requestTwo : function(cb){
	var body = '';
	http.get(url+'/users', function(res){
		res.on('data', function(chunk){
			body += chunk.toString()
		})
		res.on('end', function(){
			cb(null,body)
		})
	}).on('error', function(err){
		console.log(err)
	})
}
}, function(err, results){
	if(err) console.log(err)
	console.log(results.requestTwo)
})
