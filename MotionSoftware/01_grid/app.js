let data = MOCK; // TODO -> http-server for the module if I have enough time.
let appEl = document.getElementById("app");

// some globals
let filteredData = [];
let bFiltered = false;
let sFilterCriteria = "";

function Render(data) {
  appEl.innerHTML = "";
  let tableEl = document.createElement("table");
  let tableBodyEl = document.createElement("tbody");
  
  let trHead = document.createElement("tr");
  let tdHeadIdentification = document.createElement("td"); tdHeadIdentification.textContent = "Identification";
  let tdHeadFirstName = document.createElement("td"); tdHeadFirstName.textContent = "First Name";
  let tdHeadLastName = document.createElement("td"); tdHeadLastName.textContent = "Last Name";
  let tdHeadEmail = document.createElement("td"); tdHeadEmail.textContent = "Email";
  let tdHeadPosition = document.createElement("td"); tdHeadPosition.textContent = "Position";
  let tdHeadDepartment = document.createElement("td"); tdHeadDepartment.textContent = "Department";
  
  tdHeadIdentification.className = "sort";
  tdHeadFirstName.className = "sort";
  tdHeadLastName.className = "sort";
  tdHeadEmail.className = "sort";
  tdHeadPosition.className = "sort";
  tdHeadDepartment.className = "sort";
  tdHeadIdentification.addEventListener("click", ascSort);
  tdHeadFirstName.addEventListener("click", ascSort);
  tdHeadLastName.addEventListener("click", ascSort);
  tdHeadEmail.addEventListener("click", ascSort);
  tdHeadPosition.addEventListener("click", ascSort);
  tdHeadDepartment.addEventListener("click", ascSort);

  trHead.appendChild(tdHeadIdentification);
  trHead.appendChild(tdHeadFirstName);
  trHead.appendChild(tdHeadLastName);
  trHead.appendChild(tdHeadEmail);
  trHead.appendChild(tdHeadPosition);
  trHead.appendChild(tdHeadDepartment);
  tableBodyEl.appendChild(trHead);

  for (let i = 0; i < data.length; i++) {
    let trBody = document.createElement("tr");
    let tdIdentification = document.createElement("td"); tdIdentification.textContent = data[i].id;
    let tdFirstName = document.createElement("td"); tdFirstName.textContent = data[i].first_name;
    let tdLastName = document.createElement("td"); tdLastName.textContent = data[i].last_name;
    let tdEmail = document.createElement("td"); tdEmail.textContent = data[i].email;
    let tdPosition = document.createElement("td"); tdPosition.textContent = data[i].job_title;
    let tdDepartment = document.createElement("td"); tdDepartment.textContent = data[i].department;
    tdIdentification.className = "delete";
    tdIdentification.addEventListener("click", myDelete);
    tdDepartment.className = "filter";
    tdDepartment.addEventListener("click", myFilter);
    trBody.appendChild(tdIdentification);
    trBody.appendChild(tdFirstName);
    trBody.appendChild(tdLastName);
    trBody.appendChild(tdEmail);
    trBody.appendChild(tdPosition);
    trBody.appendChild(tdDepartment);
    tableBodyEl.appendChild(trBody);
  }
  
  tableEl.appendChild(tableBodyEl);
  appEl.appendChild(tableEl);
}

function ascSort(e) {
  let sortBy = "";
  if (e.currentTarget.textContent == "Identification")    { sortBy = "id"}
  else if (e.currentTarget.textContent == "First Name")   { sortBy = "first_name"; } 
  else if (e.currentTarget.textContent == "Last Name")    { sortBy = "last_name"; } 
  else if (e.currentTarget.textContent == "Email")        { sortBy = "email"; } 
  else if (e.currentTarget.textContent == "Position")     { sortBy = "job_title"; } 
  else if (e.currentTarget.textContent == "Department")   { sortBy = "department" }

  if (bFiltered == false) {
    if (sortBy == "id") {
      data.sort(function(a, b) {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        }
      })
    } else {
      data.sort(function(a, b) {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    }  

    Render(data);
  } else {
    if (sortBy == "id") {
      filteredData.sort(function(a, b) {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        }
      })
    } else {
      filteredData.sort(function(a, b) {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    }  

    Render(filteredData);
  }

}

function myFilter(e, criteria) {

  if (bFiltered == false) {
    filteredData = [];
    bFiltered = true;
    sFilterCriteria = e.currentTarget.textContent;
    if (criteria == undefined) { criteria = sFilterCriteria; }
    for (let i = 0; i < data.length; i++) {
      if (data[i].department == criteria) {
        filteredData.push(data[i]);
      }
    }
    Render(filteredData);
  } else {
    bFiltered = false;
    sFilterCriteria = "";
    Render(data);
  }

}

function myDelete(e) {
  let id = e.currentTarget.textContent;

  let newData = []; // creating a new arr is faster than actual deleting due to array re-indexing
  let newFilteredData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].id != id) {
      newData.push(data[i]);
    }
    
    if (data[i].id != id && data[i].department == sFilterCriteria) {
      newFilteredData.push(data[i]);
    }
  }
  data = newData;
  filteredData = newFilteredData;
   debugger;
  console.log(data); console.log(filteredData);
  if (sFilterCriteria == "") {
    Render(data);
  } else {
    Render(filteredData, sFilterCriteria);
  }

}


console.log(MOCK);
Render(data); // Initial render