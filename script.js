// Variables 
var siteTitle = document.querySelector('.site-title'); 
var siteUrl = document.querySelector('.site-url'); 
var enter = document.querySelector('.submit');
var main = document.querySelector('.main'); 
var newBookmark = document.createElement('article'); 

// Event Listeners 
enter.addEventListener('click', addBookmark); 


// Functions 
function addBookmark(event) {
  event.preventDefault(); 
  var newTitle = siteTitle.value; 
  var newUrl = siteUrl.value;
  console.log('hello'); 
  console.log(siteTitle.value);
  console.log(siteUrl.value);   
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