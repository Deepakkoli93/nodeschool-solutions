var async = require('async')
  , http = require('http')
  , fs = require('fs')

async.series({
    requestOne : function(cb){
      var body = ''
      http.get(process.argv[2], function(res){
        res.on('data', function(chunk){
          body += chunk.toString()
        });
        res.on('end', function(){
          cb(null, body)
        });
      }).on('error', function(err){
        cb(err)
      })
    },

    requestTwo : function(cb){
      var body = ''
      http.get(process.argv[3], function(res){
        res.on('data', function(chunk){
          body += chunk.toString()
        });
        res.on('end', function(){
          cb(null, body)
        });
      }).on('error', function(err){
        cb(err)
      })
    }
  }, function(err, result){
    if(err) return console.err(err);
    console.log(result)
  })