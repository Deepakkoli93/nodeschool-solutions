var mymodule = require('./mymodule')
var dirname = process.argv[2]
var fileext = process.argv[3]
mymodule(dirname, fileext, function(err, data){
	if(err != null)
	{
		return console.error(err)
	}
	data.forEach(function(file){
		console.log(file)
	})
})