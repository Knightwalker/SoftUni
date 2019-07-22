const kinveyUsername = "guest";
const kinveyPassword = "guest";
const appKey = "kid_BkhXN1mGS";
const appSecret = "1cf5f904786c4199a5b77f36384729be";
const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/books`;

let tableBody = document.getElementById("tableBody");

let btnCreateBook = document.getElementById("btnCreateBook");
btnCreateBook.addEventListener("click", fCreateBook);

let btnLoadBooks = document.getElementById("btnLoadBooks");
btnLoadBooks.addEventListener("click", fLoadBooks);

let btnDoneEdit = document.getElementById("btnDoneEdit");
btnDoneEdit.addEventListener("click", fDoneEdit);
let btnCancelEdit = document.getElementById("btnCancelEdit");
btnCancelEdit.addEventListener("click", fCancelEdit);

// fCreateBook
function fCreateBook() {
  event.preventDefault();
  let title_el = document.getElementById("title");
  let author_el = document.getElementById("author");
  let isbn_el = document.getElementById("isbn");

  // validate data
  if (title_el.value != "" && author_el.value != "" && isbn_el.value != "") {
    var data = {
      title: title_el.value,
      author: author_el.value,
      isbn: isbn_el.value,
    } 
    title_el.value = "";
    author_el.value = "";
    isbn_el.value = "";
  } else {
    alert("Invalid data");
    return 0;
  }

  const headers = {
    method:"POST",
    body: JSON.stringify(data),
    credentials: "include",
    Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
    headers: {
      "Content-type":"application/json"
    } 
  };

  fetch(baseUrl, headers)
  .then(response => {
    if (response.status >= 400) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(function(){
    fLoadBooks();
  })
  .catch(err => console.log(err));
}
// END fCreateBook

// fLoadBooks
function fLoadBooks() {
  const headers = {
    credentials: "include",
    Authorization: "Kinvey" + localStorage.getItem("authToken"),
  }

  fetch(baseUrl, headers)
  .then(response => {
    if (response.status >= 400) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    tableBody.innerHTML = "";
    let fragment = document.createDocumentFragment();
    for(let key in data) {
      let id = data[key]["_id"];
      let author = data[key]["author"];
      let title = data[key]["title"];
      let isbn = data[key]["isbn"];

      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${title}</td>`
                   + `<td>${author}</td>`
                   + `<td>${isbn}</td>`
                   + `<td>`
                   +    `<button onclick="fEdit()" value="${id}">Edit</button>`
                   +    `<button onclick="fDelete()" value="${id}">Delete</button>`
                   + `</td>`
                   ;
      fragment.appendChild(tr);
    }
    tableBody.appendChild(fragment);

  })
  .catch(err => console.log(err));

}
// END fLoadBooks

function fEdit() {
  let title_el = document.getElementById("title");
  let author_el = document.getElementById("author");
  let isbn_el = document.getElementById("isbn");
 
  let id = event.currentTarget.value;
  let elementsArr = event.currentTarget.parentElement.parentElement.getElementsByTagName("td");
  title_el.value = elementsArr[0].textContent;
  author_el.value = elementsArr[1].textContent;
  isbn_el.value = elementsArr[2].textContent;

  btnCreateBook.style.display = "none";
  btnDoneEdit.style.display = "block";
  btnCancelEdit.style.display = "block";
  btnDoneEdit.value = id;
  btnCancelEdit.value = id;
}

function fCancelEdit() {
  event.preventDefault();
  let title_el = document.getElementById("title");
  let author_el = document.getElementById("author");
  let isbn_el = document.getElementById("isbn");
 
  title_el.value = "";
  author_el.value = "";
  isbn_el.value = "";

  btnCreateBook.style.display = "block";
  btnDoneEdit.style.display = "none";
  btnCancelEdit.style.display = "none";
  btnDoneEdit.value = "-1";
  btnCancelEdit.value = "-1";
}

function fDoneEdit() {
  event.preventDefault();
  let id = event.currentTarget.value;
  let title_el = document.getElementById("title");
  let author_el = document.getElementById("author");
  let isbn_el = document.getElementById("isbn");

  // validate data
  if (title_el.value != "" && author_el.value != "" && isbn_el.value != "") {
    var data = {
      title: title_el.value,
      author: author_el.value,
      isbn: isbn_el.value,
    } 
    title_el.value = "";
    author_el.value = "";
    isbn_el.value = "";
  } else {
    alert("Invalid data");
    return 0;
  }

  const headers = {
    method:"PUT",
    body: JSON.stringify(data),
    credentials: "include",
    Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
    headers: {
      "Content-type":"application/json"
    } 
  };

  const editUrl = `${baseUrl}/${id}`;
  fetch(editUrl, headers)
  .then(response => {
    if (response.status >= 400) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(function(){
    fLoadBooks();
  })
  .catch(err => console.log(err));

  btnCreateBook.style.display = "block";
  btnDoneEdit.style.display = "none";
  btnCancelEdit.style.display = "none";
  btnDoneEdit.value = "-1";
  btnCancelEdit.value = "-1";

}

function fDelete() {
  let id = event.currentTarget.value;

  const headers = {
    method:"DELETE",
    credentials: "include",
    Authorization: "Kinvey" + localStorage.getItem("authToken"),
    headers: {
      "Content-type":"application/json"
    } 
  };

  const deleteUrl = `${baseUrl}/${id}`;
  fetch(deleteUrl, headers)
  .then(response => {
    if (response.status >= 400) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(function(){
    fLoadBooks();
  })
  .catch(err => console.log(err));

}