var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function(err, contents){
	if(err != null)
	{
		console.log("error in reading file")
		process.exit(0)
	}
	console.log(contents.split('\n').length - 1)
})