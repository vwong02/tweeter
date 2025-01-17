$(document).ready(function() {

  $(".error-msg").hide();

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweetData) {
    const tweet = `
    <article class="tweet-container">
          <header>
            <div class="tweet-header">
              <div class="user-info">
                <img "user-avatar" src=${ tweetData.user.avatars }>
                <p class="bold-font">${ tweetData.user.name }</p>
              </div>
              <p id="username">${ tweetData.user.handle }</p>
            </div>
            <p id="tweet-content">${ escape(tweetData.content.text) }</p> 
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


  /* AJAX GET request for the tweets from database */
  const loadTweets = function() {
    $.get("/tweets")
      .then((tweetsArr) => renderTweets(tweetsArr))
      .catch(err => console.log(err));
  };
  loadTweets();

  /* Render tweets into the tweets-container */
  const renderTweets = function(tweetsArr) {
    $("#tweets-container").empty();
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

      $(".error-msg").hide();

      if ($("#textarea").val().length > 140) {
        $("#too-many-error").fadeIn();
        if (("#too-many-error:visible")) {
          setTimeout(() => $("#too-many-error").fadeOut(), 1500);
        }
        return;
      }

      if ($("#textarea").val().length === 0) {
        $("#no-char-error").fadeIn("fast");
        if ($("#no-char-error:visible")) {
          setTimeout(() => $("#no-char-error").fadeOut("fast"), 1500);
        }
        return;
      }

      $.post("/tweets", serializedData)
        .then(() => loadTweets())
        .then(() => this.reset())
        .then(() => $(".error-msg").hide())
        .then(() => $(".counter").text(140))
        .catch(err => console.log(err));

    });
  };
  submitTweet();

});


