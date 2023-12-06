/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  // --- our code goes here ---
  console.log("client.js ready");

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

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
            <p>${ tweetData.created_at }</p>
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
    .catch(err => console.log(err))
  }
  loadTweets();
  
  /* Render tweets into the tweets-container */
  const renderTweets = function(tweetsArr) {
    // loops through tweets
    for (const tweetInfo of tweetsArr) {
      // calls createTweetElement for each tweet
      const $tweets = createTweetElement(tweetInfo);
      // takes return value and appends it to the tweets container
      $("#tweets-container").append($tweets);
    }
  };

  /* Form Submission */
  const submitTweet = function() {
    $("#new-tweet-form").on("submit", function(event) {
      event.preventDefault();
      const serializedData = $(data).serialize();
      
      console.log("Post for submit button");

      $.post("/tweets", serializedData)
      .then(() => loadTweets())
      .catch(err => console.log(err))
    });
  };



  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.




});

