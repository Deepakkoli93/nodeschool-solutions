var async = require('async')
  , http = require('http')
  , fs = require('fs')

async.waterfall([
    function(cb){
      fs.readFile(process.argv[2], 'utf8', function(err, contents){
        if(err != null)
        {
          cb(null)
        }
        cb(null, contents)
      })
    },

    function(contents, cb){
      var body = ''
      http.get(contents, function(res){
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
  ], function(err, result){
    if(err) return console.err(err);
    console.log(result)
  })