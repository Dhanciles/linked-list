// Variables
var siteTitle = document.querySelector('.js-site-title');
var siteUrl = document.querySelector('.js-site-url');
var enter = document.querySelector('.js-submit');
var main = document.querySelector('.js-main');
var deleteReadButton = document.querySelector('.js-delete-read');

// Event Listeners
enter.addEventListener('click', checkInputs);
siteTitle.addEventListener('input', enableEnter);
siteUrl.addEventListener('input', enableEnter);
deleteReadButton.addEventListener('click', deleteReadBookmarks);

// Functions

// Header section
function enableEnter() {
  enter.removeAttribute('disabled');
}

function disableEnter() {
  enter.setAttribute('disabled', '');
}

function enableDeleteReadBtn() {
  deleteReadButton.removeAttribute('disabled');
}

function disableDeleteReadBtn() {
  deleteReadButton.setAttribute('disabled', '');
}

function checkInputs(event) {
  event.preventDefault();
  if (!siteTitle.value) {
    alert('Please enter a website title');
  } else if (!siteUrl.value || !siteUrl.validity.valid) {
    alert('Please enter a url beginning with https://');
  } else {
    debugger; 
    addBookmark();
  };
};

function clearInput() {
  siteTitle.value = '';
  siteUrl.value = '';
};

function updateTotalBookmarks() {
  var cardCounter = document.querySelectorAll('article').length;
  var totalBookmarks = document.querySelector('.js-total-bookmarks');
  totalBookmarks.innerText = `Bookmarks: ${cardCounter}`;
  updateTotalRead(cardCounter);
}

function updateTotalRead(cardCounter) {
  var readCounter = document.querySelectorAll('article.read').length;
  var totalRead = document.querySelector('.js-total-read');
  totalRead.innerText = `Read: ${readCounter}`;
  updateTotalUnread(cardCounter, readCounter);
}

function updateTotalUnread(cardCounter, readCounter) {
  var unreadCounter = cardCounter - readCounter;
  var totalUnread = document.querySelector('.js-total-unread');
  totalUnread.innerText = `Unread: ${unreadCounter}`;
}

//Main section
function addBookmark() {
  var newBookmark = document.createElement('article');
  var newTitle = siteTitle.value.trim();
  var newUrl = siteUrl.value.trim();
  createCard(newBookmark, newTitle, newUrl);
  main.appendChild(newBookmark);
  setNewVariables();
  clearInput();
  disableEnter();
  updateTotalBookmarks();
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

function setNewVariables() {
  var readButtons = Array.from(document.querySelectorAll('.js-read-button'));
  var deleteButtons = Array.from(document.querySelectorAll('.js-delete-button'));
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
  updateTotalBookmarks();
  enableDeleteReadBtn(); 
};

function removeCard(event) {
  event.target.closest('article').remove('article');
  updateTotalBookmarks();
};

function deleteReadBookmarks() {
  var readBookmarks = Array.from(document.querySelectorAll('article.read')); 
  for (var i = 0; i < readBookmarks.length; i++) {
    readBookmarks[i].remove();
  }
  updateTotalBookmarks();
  disableDeleteReadBtn();  
}