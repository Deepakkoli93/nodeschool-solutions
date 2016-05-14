http = require('q-io/http')

http.read("http://localhost:1337")
.then(function(data){console.log(JSON.parse(data))})