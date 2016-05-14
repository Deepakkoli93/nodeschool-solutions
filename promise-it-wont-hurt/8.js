function attachTitle(x){
	return "DR. "+x;
}

var promise = Promise.resolve("MANHATTAN")
promise.then(attachTitle).then(console.log)