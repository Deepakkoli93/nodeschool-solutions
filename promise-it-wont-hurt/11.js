function all(p1, p2){
	var counter = 0;
	var val1, val2;
	var promise = new Promise(function(fulfill, reject){
		p1.then(function(v1){
			val1 = v1
			++counter
			if(counter == 2)
				fulfill([val1, val2])
		})
		p2.then(function(v2){
			val2 = v2
			++counter
			if(counter == 2)
				fulfill([val1, val2])
		})
	})
	return promise
}
all(getPromise1(), getPromise2())
.then(console.log)
