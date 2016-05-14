var fs = require('fs')
path = require('path')
var e = "."+process.argv[3]
fs.readdir(process.argv[2], function(err, list){
	for(var i=0; i<list.length; i++)
	{
		if(path.extname(list[i]) == e)
		{
			console.log(list[i])
		}
	}
})