// https://socialmediahub.mit.edu/blog/how-create-pre-written-tweets
const newQuoteButton = document.getElementById('new-quote');

async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  const quote = `${data.content.split(' ').join('%20')} ~${data.author}`;
  const tweet = `http://twitter.com/intent/tweet?text=${quote}`;
  const tweetEl = document.getElementById('tweet');
  tweetEl.setAttribute('href', tweet);

  //   return data
  display(data);
}

function display(item) {
  const author = document.getElementById('author');
  const quote = document.getElementById('text');

  quote.textContent = item.content;
  author.textContent = item.author;
}

document.addEventListener('DOMContentLoaded', getQuote);
newQuoteButton.addEventListener('click', getQuote);
