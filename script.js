// Variables 
var siteTitle = document.querySelector('.js-site-title'); 
var siteUrl = document.querySelector('.js-site-url'); 
var enter = document.querySelector('.js-submit');
var main = document.querySelector('.js-main'); 
var readButton;
var deleteButton; 
var bookmarkUrl;  
var article;

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
  createCard(newBookmark, newTitle, newUrl);
  main.appendChild(newBookmark); 
  clearInput();
  setNewVariables();
}

function createCard(newBookmark, newTitle, newUrl) {
  newBookmark.innerHTML = `<h2>${newTitle}</h2>
    <hr>
    <a class="js-bookmark-url bookmark-url underline" href="${newUrl}">${newUrl}</a>
    <hr>
    <div class="bookmark-buttons">
      <button class="js-read-button read-button underline" type="button">Read</button>
      <button class="js-delete-button delete-button underline" type="button">Delete</button>
    </div>`;
}

function clearInput() {
  siteTitle.value = ""; 
  siteUrl.value = ""; 
}

function setNewVariables() {
  readButton = document.querySelector('.js-read-button');
  deleteButton = document.querySelector('.js-delete-button'); 
  bookmarkUrl = document.querySelector('.js-bookmark-url');
  article = document.querySelector('article');
  readButton.addEventListener('click', checkRead);
  deleteButton.addEventListener('click', removeCard);
}

// How could we update event listeners? When a new article is created does the browser recognize a new instance of an event per card?
// querySelectorAll or getElementsByClassName? Which is better to use
// How do you target classList of multiple elements(ref. line 60)
// Pattern for validating url? Would the pattern attribute come from html or implementation through js?

function checkRead() {
  // article.classList.contains('.read') ? removeRead() : addRead();
  
  // ALTERNATIVE function toggleRead() {
  // ALTERNATIVE   article.classList.toggle('.read');
  // ALTERNATIVE   readButton.classList.toggle('.read');
  // ALTERNATIVE   deleteButton.classList.toggle('.read');
  // ALTERNATIVE   bookmarkUrl.classList.toggle('.read');
  // ALTERNATIVE }
}

function addRead() {
  // if(event.target.className === 'js-read-button') {
    article.classList.add('read'); 
    readButton.classList.add('read'); 
    deleteButton.classList.add('read');
    bookmarkUrl.classList.add('read');  
  }
// }

function removeRead() {
  // if(event.target.className === 'js-read-button') {
    article.classList.remove('read'); 
    readButton.classList.remove('read'); 
    deleteButton.classList.remove('read');
    bookmarkUrl.classList.remove('read');  
  }
// }

function removeCard() {
  // delete card
}

