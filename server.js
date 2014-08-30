var express = require('express')
var app = express();
var fs=require('fs')
app.listen(8000)
var stored={}
stored.allTweets=[]



app.use(express.static(__dirname+'/public'))

app.post('/send', express.bodyParser(), function(req, res) 
{
	console.log("RECD", req.body);
	if (req.body) 
	{
		stored.allTweets.push(req.body)
		fs.writeFile(__dirname+"/public/tweet.JSON",JSON.stringify(stored.allTweets)+"\r\n",function(er){//dirname
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

	fs.readFile(__dirname+"/public/tweet.JSON",function(er,data){
		if(er)
			conole.log(er)
		else
			stored.allTweets.push((JSON.parse(data)))
	})

	

app.get('/tweets', function(req,res) {
res.send(tweets)
})

