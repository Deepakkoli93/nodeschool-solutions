var http = require('http')
, async = require('async')

var count = 0;
var s = '';

async.whilst(
	function() {return s !== "meerkat"},
		function(callback){
		count++;
		http.get(process.argv[2], function(res){
			var body = "";
			res.setEncoding('utf-8')
			res.on("data", function(chunk){
				body += chunk;
			});
			res.on("end", function(){				
				s=body;
				//console.log(s)
				callback(null, count)
			})
		}).on('error', function(){callback(err)})
	},
 function(err){
		if(err) console.log(err)
		console.log(count)
	})






