function parsedPromise(s)
{
	var promise = new Promise(function(fulfill, reject){
		try{
			JSON.parse(s)
			fulfill(s)
		}
		catch(e){
			reject(e)
		}
	})
	return promise
}

parsedPromise(process.argv[2])
.then(null, console.log)