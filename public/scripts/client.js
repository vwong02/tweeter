/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  // --- our code goes here ---
  console.log("client.js ready");

  const createTweetElement = function (tweetData) {
    const $tweet = `
    <article class="tweet-container">
          <header>
            <div class="tweet-header">
              <div class="user-info">
                <img "user-avatar" src=${ tweetData.user.avatars }>
                <p class="bold-font">${ tweetData.user.name }</p>
              </div>
              <p class="bold-font" id="username">${ tweetData.user.handle }/p>
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
    return $tweet;
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

