const kinveyUsername = "guest";
const kinveyPassword = "guest";
const appKey = "kid_BkhXN1mGS";
const appSecret = "1cf5f904786c4199a5b77f36384729be";
const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;

let tableBody = document.getElementById("tableBody");

let btnCreateStudent = document.getElementById("btnCreateStudent");
btnCreateStudent.addEventListener("click", fCreateStudent);

function fCreateStudent() {
  event.preventDefault();
  let student_id_el = document.getElementById("student_id");
  let first_name_el = document.getElementById("first_name");
  let last_name_el = document.getElementById("last_name");
  let faculty_number_el = document.getElementById("faculty_number");
  let grade_el = document.getElementById("grade");

  // validate data
  if (student_id_el.value != "" && first_name_el.value != "" && last_name_el.value != "" && faculty_number_el.value != "" && grade_el.value != "") {
    var data = {
      student_id: student_id_el.value,
      first_name: first_name_el.value,
      last_name: last_name_el.value,
      faculty_number: faculty_number_el.value,
      grade: grade_el.value
    } 
    student_id_el.value = "";
    first_name_el.value = "";
    last_name_el.value = "";
    faculty_number_el.value = "";
    grade_el.value = "";
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
    fLoadStudents();
  })
  .catch(err => console.log(err));

}

function fLoadStudents() {
  
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

    // sort ascending by student ID
    data.sort(function(a, b) {
      return a.student_id - b.student_id;
    });
 
    for(let key in data) {
      let student_id = data[key]["student_id"];
      let first_name = data[key]["first_name"];
      let last_name = data[key]["last_name"];
      let faculty_number = data[key]["faculty_number"];
      let grade = data[key]["grade"];

      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${student_id}</td>`
                   + `<td>${first_name}</td>`
                   + `<td>${last_name}</td>`
                   + `<td>${faculty_number}</td>`
                   + `<td>${grade}</td>`
                   ;
      fragment.appendChild(tr);
    }
    tableBody.appendChild(fragment);

  })
  .catch(err => console.log(err));

}
