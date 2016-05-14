'use strict'
var promise = Promise.reject(new Error('SECRET VALUE'))
promise.catch(function(err){
	console.error(err)
});
