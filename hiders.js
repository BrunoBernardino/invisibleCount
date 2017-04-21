const twitter = {
  check: (currentURL) => (currentURL.indexOf('https://twitter.com') === 0),
  run: (document, hideElement, replaceElement) => {
    // Tweets, Following, Followers
    document.querySelectorAll('span.ProfileCardStats-statValue').forEach((element) => replaceElement(element, '--'));

    // Retweets
    document.querySelectorAll('span.ProfileTweet-actionCount').forEach(hideElement);

    // Likes
    document.querySelectorAll('span.ProfileTweet-actionCount').forEach(hideElement);

    // Trend tweeks
    document.querySelectorAll('.js-nav.trend-item-stats').forEach(hideElement);

    // Other-profile Tweets, Following, Followers, Likes, Lists
    document.querySelectorAll('.ProfileNav-value').forEach((element) => replaceElement(element, '--'));
  }
};

const medium = {
  check: (currentURL) => (currentURL.indexOf('https://medium.com') === 0 || currentURL.indexOf('https://m.signalvnoise.com') === 0 || currentURL.indexOf('https://hackernoon.com') === 0),
  run: (document, hideElement, replaceElement) => {
    // Following
    document.querySelectorAll('.buttonSet a[data-action-value="following"] b').forEach(hideElement);

    // Followers
    document.querySelectorAll('.buttonSet a[data-action-value="followers"] span').forEach(hideElement);

    // Recommends
    document.querySelectorAll('button[data-action="show-recommends"]').forEach(hideElement);

    // Responses
    document.querySelectorAll('.buttonSet a[href$="#--responses"]').forEach((element) => replaceElement(element, 'responses'));

    // Recommends and Responses on linked posts
    document.querySelectorAll('.u-borderCardBackground .u-floatRight .label-text').forEach((element) => replaceElement(element, '-'));

    // Responses count
    document.querySelectorAll('.js-postActionsFooter button[data-action="scroll-to-responses"]').forEach((element) => replaceElement(element, '--'));

    // Recomends count for responses
    document.querySelectorAll('.postMetaInline span.u-noWrap').forEach(hideElement);
  }
};

const hiders = [twitter, medium];
