$(document).ready(function() {

  $('.button').hover(function(){
    $(this).addClass('active')
  },function(){
    $(this).removeClass('active')
  })
  // On clicking button, run this "anonymous" function
  $('#send').click(function() {
    // Get the text from the textarea input box
    tweet_text = $('#tweet-message').val();
    // Just show in console what the tweet is
    console.log("Tweet Text is: ", tweet_text, "\r\nSending Tweet...");
    // post the data as a JSON object to the route '/send'
    // which will be handled by the backend server (twitter.js)

    /*
      The `$.post()` is a shortcut for writing
      ````
       $.ajax({
         type: 'POST',
         url: '/send',
         data: {tweet: tweet_text},
         success: function() { ... }
       });
      ````
    */
    $.post('/send', {tweet: tweet_text}, function(response) {
      console.log(response);
      alert("Your tweet was sent successfully");
    });
  });

  $('#tweet').click(function(){
    $.ajax({url:"/tweets",success:function(data){
      console.log(data)
      $('#show').html(data)
    }})
  })
})
