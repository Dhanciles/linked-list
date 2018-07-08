// Variables 
var siteTitle = document.querySelector('.js-site-title'); 
var siteUrl = document.querySelector('.js-site-url'); 
var enter = document.querySelector('.js-submit');
var main = document.querySelector('.js-main'); 
var newBookmark = document.createElement('article'); 

// Event Listeners 
enter.addEventListener('click', addBookmark); 

// Functions 
function addBookmark(event) {
  event.preventDefault(); 
  var newTitle = siteTitle.value; 
  var newUrl = siteUrl.value;  
  newBookmark.innerHTML = `
        <h2>${newTitle}</h2>
        <hr>
        <a class="bookmark-url underline" href="${newUrl}">${newUrl}</a>
        <hr>
        <div class="bookmark-buttons">
          <a class="read underline has-been-read" href="">Read</a>
          <a class="delete underline" href="">Delete</a>
        </div>
      `; 
  main.appendChild(newBookmark); 
  clearInput();
}

function clearInput() {
  siteTitle.value = ""; 
  siteUrl.value = ""; 
}