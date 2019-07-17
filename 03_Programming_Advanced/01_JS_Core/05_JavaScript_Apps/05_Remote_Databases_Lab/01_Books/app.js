let getBooksEl = document.getElementById("getBooks");
let createBookEl = document.getElementById("createBook");
let booksBodyEl = document.getElementById("booksBody");

getBooksEl.addEventListener("click", function(){
  let counter = 0;
  booksBodyEl.innerHTML = "";

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) { return; }
    if (xhr.status >= 200 && xhr.status < 300) {
      let booksObj = JSON.parse(xhr.responseText);
      for (let key in booksObj) {
        let currentKey = key;
        let currentAuthor = booksObj[key]["author"];
        let currentTitle = booksObj[key]["title"];
        let divEl = document.createElement("div");
        divEl.id = key;
        divEl.innerHTML = `<div>Book Number: ${++counter}</div>`
                        + `<input value="${currentAuthor}"></input>`
                        + `<input value="${currentTitle}"></input>`
                        + '<button onclick="edit()">Edit</button>'
                        + '<button onclick="del()">Delete</button>'
                        + '<br><br>'
                        ;
        booksBodyEl.appendChild(divEl);
      }
    }
  };
  xhr.open('GET', 'https://testapp-5deff.firebaseio.com/books.json');
  xhr.send();

});

createBookEl.addEventListener("click", function(){
  let createAuthorEl = document.getElementById("createAuthor");
  let createTitleEl = document.getElementById("createTitle");
  let author = createAuthorEl.value;
  let title = createTitleEl.value;
  createAuthorEl = "";
  createTitleEl = "";

  var data = {
      "author": author,
      "title": title
  };

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://testapp-5deff.firebaseio.com/books.json");
  xhr.setRequestHeader("cache-control", "no-cache");  
  xhr.send(JSON.stringify(data));

});

function edit() {
  let id = event.currentTarget.parentElement.id;
  let author = document.querySelector(`#${id} > input:nth-child(2)`).value;
  let title = document.querySelector(`#${id} > input:nth-child(3)`).value;

  let data = {
    "author": author,
    "title": title
  };
  let xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("PUT", `https://testapp-5deff.firebaseio.com/books/${id}.json`);
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(JSON.stringify(data));
}

function del() {
  let id = event.currentTarget.parentElement.id;
  let data = null;

  let xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("DELETE", `https://testapp-5deff.firebaseio.com/books/${id}.json`);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("cache-control", "no-cache");  
  xhr.setRequestHeader("postman-token", "559e06d5-2647-0f53-255a-511ae976e023");
  xhr.send(data);
}