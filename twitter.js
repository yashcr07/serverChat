var express = require('express');
var app = express();
var bodyParser= require('body-parser')
app.listen(8000);

app.get('/', function(req, res) {
res.send('Welcome to Node Twitter')
})

var tweets=[];
app.post('/send',express.bodyParser(),function(req,res){
	if(req.body&&req.body.tweet){
		tweets.push(req.body.tweet)
		res.send({status:"ok",messege:"Tweet received"})
	}
	else{
		//no tweet
		res.send({status:"nok",messege:"No tweet received"})
	}
})

app.get('/tweets',function(req,res){
	res.send(tweets)
})

