// Variables 
var siteTitle = document.querySelector('.js-site-title'); 
var siteUrl = document.querySelector('.js-site-url'); 
var enter = document.querySelector('.js-submit');
var main = document.querySelector('.js-main'); 
var readButtons; 
var deleteButtons; 
var bookmarkUrls;  
var articles; 

// Event Listeners 
enter.addEventListener('click', checkInputs);  

// Functions
function checkInputs(event) {
  event.preventDefault();
  if (siteTitle.value === "") {
    alert('Please enter a website title');
  } else if (siteUrl.value === "") {
    alert('Please enter a url beginning with https://');
  } else {
    addBookmark();
  }
}

function addBookmark() {
  var newBookmark = document.createElement('article'); 
  var newTitle = siteTitle.value; 
  var newUrl = siteUrl.value;  
  newBookmark.innerHTML = `
        <h2>${newTitle}</h2>
        <hr>
        <a class="js-bookmark-url bookmark-url underline" href="${newUrl}">${newUrl}</a>
        <hr>
        <div class="bookmark-buttons">
          <button class="js-read-button read-button underline" type="button">Read</button>
          <button class="js-delete-button delete-button underline" type="button">Delete</button>
        </div>
      `; 
  main.appendChild(newBookmark); 
  clearInput();
  readButtons = document.querySelector('.js-read-button');
  deleteButtons = document.querySelectorAll('.js-delete-button'); 
  bookmarkUrls = document.querySelectorAll('.js-bookmark-url');
  articles = document.querySelectorAll('article');
  readButtons.addEventListener('click', addRead);
}

// How could we update event listeners? When a new article is created is the browser recognize a new instance of an event per card?
// querySelectorAll or getElementsByClassName? Which is better to use
// How do you target classList of multiple elements(ref. line 59)
// Pattern for validating url? Would the pattern attribute come from html or implementation through js?

function clearInput() {
  siteTitle.value = ""; 
  siteUrl.value = ""; 
}

function addRead() {
  // if(event.target.className === 'js-read-button') {
    articles.classList.add('read'); 
    readButtons.classList.add('read'); 
    deleteButtons.classList.add('read');
    bookmarkUrls.classList.add('read');  
  }
// }

