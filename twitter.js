var express = require('express')
var app = express();
app.listen(8000)
var tweets = []


app.use(express.static(__dirname+'/public'))

app.post('/send', express.bodyParser(), function(req, res) 
{
	console.log("RECD", req.body);
	if (req.body) 
	{
		tweets.push(req.body)
		res.send({status:"ok", message:"Tweet received"})
	}
	else 
	{
		//no tweet?
		res.send({status:"nok", message:"No tweet received"})
	}
	})

app.get('/tweets', function(req,res) {
res.send(tweets)
})

