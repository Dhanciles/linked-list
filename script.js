// Variables
var siteTitle = document.querySelector('.js-site-title');
var siteUrl = document.querySelector('.js-site-url');
var enter = document.querySelector('.js-submit');
var main = document.querySelector('.js-main');

// Event Listeners
enter.addEventListener('click', checkInputs);
siteTitle.addEventListener('input', enableEnter);
siteUrl.addEventListener('input', enableEnter);

// Functions
function enableEnter() {
  enter.removeAttribute('disabled');
}

function checkInputs(event) {
  event.preventDefault();
  if (siteTitle.value === '') {
    alert('Please enter a website title');
  } else if (siteUrl.value === '') {
    alert('Please enter a url beginning with https://');
  } else {
    addBookmark();
  };
};

function addBookmark() {
  var newBookmark = document.createElement('article');
  var newTitle = siteTitle.value;
  var newUrl = siteUrl.value;
  createCard(newBookmark, newTitle, newUrl);
  main.appendChild(newBookmark);
  clearInput();
  setNewVariables();
};

function createCard(newBookmark, newTitle, newUrl) {
  newBookmark.innerHTML = `<h2>${newTitle}</h2>
    <hr>
    <a class="js-bookmark-url bookmark-url underline" href="${newUrl}">
      ${newUrl}
    </a>
    <hr>
    <div class="bookmark-buttons">
      <button class="js-read-button read-button underline" type="button">
        Read
      </button>
      <button class="js-delete-button delete-button underline" type="button">
        Delete
      </button>
    </div>`;
};

function clearInput() {
  siteTitle.value = '';
  siteUrl.value = '';
};

function setNewVariables() {
  readButtons = Array.from(document.querySelectorAll('.js-read-button'));
  deleteButtons = Array.from(document.querySelectorAll('.js-delete-button'));
  setEventListeners(readButtons, toggleRead);
  setEventListeners(deleteButtons, removeCard);
};

function setEventListeners(collection, action) {
  for (var i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', action);
  };
};

function toggleRead(event) {
  event.target.closest('main > article').classList.toggle('read');
};

function removeCard(event) {
  event.target.closest('article').remove('article');
};

// Pattern for validating url? Would the pattern attribute come from html or implementation through js?

