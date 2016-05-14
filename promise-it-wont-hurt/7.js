first()
.then(function(s1){
		return second(s1)
	}).then(function(s2){
		console.log(s2)
	})