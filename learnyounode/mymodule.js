var fs = require('fs')
var path = require('path')
module.exports = function(dirname, extname, callback){
	extname = "."+extname;
	fs.readdir(dirname, function(err, list){
	if(err != null)
	{
		return callback(err)
	}
	var a = []

	list.forEach(function(file){
		if(path.extname(file) === extname)
		{
			a.push(file)
		}
	})
	callback(null,a)
})
}