//require('es6-promise')
'use strict'
var promise = new Promise(function(fulfill, reject){
	setTimeout(function(){
		fulfill('FULFILLED!')
	}, 300)
})
promise.then(function(val){console.log(val)})