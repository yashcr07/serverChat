var express = require('express')
var app = express();
var fs=require('fs')
app.listen(8000)
var tweets = []


app.use(express.static(__dirname+'/public'))

app.post('/send', express.bodyParser(), function(req, res) 
{
	console.log("RECD", req.body);
	if (req.body) 
	{
		tweets.push(req.body)
		fs.appendFile("G:/Programming/NodeJS/ChatXpress/public/tweet.txt",JSON.stringify(req.body.tweet)+"\r\n",function(er){
			if(er)
				console.log(er)
			else
			   	console.log("Tweet saved")

		})
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

