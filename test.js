var http=require('http');
var assert=require('assert');

var opts={
	host:'localhost',
	port:8000,
	path:'/send',
	method:'POST',
	header:{'content-type':'application/x-www-form-urlencoded'}
}

var req=http.request(opts,function(res){
	res.setEncoding('utf8')
	var data=""
	res.on('data',function(d){
		console.log(d)
		data+=d;
	})
	res.on('end',function(){
		
		assert.strictEqual(data,'{"status":"ok","message":"Tweet Received"}')
	})
})

req.write('tweet=test')
req.end()
        