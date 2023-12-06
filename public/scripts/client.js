/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  // --- our code goes here ---
  console.log("client.js ready");


  const createTweetElement = function(tweetData) {
    const tweet = `
    <article class="tweet-container">
          <header>
            <div class="tweet-header">
              <div class="user-info">
                <img "user-avatar" src=${ tweetData.user.avatars }>
                <p class="bold-font">${ tweetData.user.name }</p>
              </div>
              <p class="bold-font" id="username">${ tweetData.user.handle }</p>
            </div>
            <p id="tweet-content">${ tweetData.content.text }</p> 
          </header>
          
          <footer>
            <p>${ timeago.format(tweetData.created_at) }</p>
            <div class="social-icons">
              <i class="fas fa-flag"></i>
              <!-- <i class="fa-regular fa-flag"></i> -->
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
              <!-- <i class="fa-regular fa-heart"></i> -->
            </div>
          </footer>
        </article>
  `;
    return tweet;
  };



  /* AJAX GET request to get tweets from the tweets database (/tweets) */
  const loadTweets = function() {
    $.get("/tweets")
      .then((tweetsArr) => renderTweets(tweetsArr))
      .catch(err => console.log(err));
  };
  loadTweets();

  /* Render tweets into the tweets-container */
  const renderTweets = function(tweetsArr) {
    // loops through tweets
    for (const tweetInfo of tweetsArr) {
      // calls createTweetElement for each tweet
      const $tweets = createTweetElement(tweetInfo);
      // takes return value and prepends it to the tweets container
      $("#tweets-container").prepend($tweets);
    }
  };

  /* Form Submission */
  const submitTweet = function() {
    $("#new-tweet-form").on("submit", function(event) {
      event.preventDefault();
      
      const serializedData = $(this).serialize();
      
      if($("#textarea").val().length > 140) {
        window.alert("Your tweet exceeds 140 characters!")
        return;
      }
      
      $.post("/tweets", serializedData)
      .then(() => loadTweets())
      .then(() => this.reset())
      .then(() => $(".counter").text(140))
      .catch(err => console.log(err));

    });
  };
  submitTweet()
});

