let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {

  function shortenTitle() {
    const webtitle = document.querySelector('#main-title');
      webtitle.innerHTML = '2fast 2furious';
  }

  function bgColor() {
    const bod = document.querySelector('body');
      bod.style.backgroundColor = 'pink';
  }

  function favorite() {
    let favThings = document.getElementById('favorite-things');
      favThings.removeChild(favThings.lastElementChild);
  }

  function sizeChange() {
    const special = document.getElementById('quote-title');
      special.style.fontSize = '2rem';

    const special2 = document.getElementById('dom-adventures')
      special2.style.fontSize = '2rem';
  }

  function noChicago() {
    let pastRace = document.getElementById('past-races');
      pastRace.removeChild(pastRace.childNodes[7]);
  }

  function addRace() {
    const pastRace = document.querySelector('#past-races');
    const li = document.createElement('li');
      li.innerHTML = "Paris";
      pastRace.appendChild(li);
  }

  function tumblr() {
    const mainId = document.querySelector('.main');

    const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');
      blogPost.classList.add('purple');
      mainId.appendChild(blogPost);

    const makePost = document.createElement('h1');
      makePost.innerHTML = 'Paris';
      blogPost.appendChild(makePost);

    const innerPost = document.createElement('p');
    innerPost.innerHTML = 'bought some balenciaga';
    innerPost.appendChild(innerPost);
  }









  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    document.querySelector('#quote-of-the-day').addEventListener('click', handleClick);
    function handleClick(evt) {
      console.log(evt);
  };
  randomQuote();


  // Do all of your work inside the document.addEventListener

  // Part 1

shortenTitle();

  // Part 2

bgColor();

  // Part 3

favorite();

  // Part 4

sizeChange();

  // Part 5

noChicago();

  // Part 6

addRace();

  // Part 7

tumblr();
//i couldn't get the innerHTML to work here, could use feed back

  // Part 8

randomQuote();
// i couldnt get the event handler to work here either line 74


  // Part 9

// i need a quick runthrough on how to do event listeners im def confused with these


});
