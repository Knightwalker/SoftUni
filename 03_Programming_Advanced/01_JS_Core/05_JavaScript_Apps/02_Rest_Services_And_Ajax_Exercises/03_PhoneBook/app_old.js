function attachEvents() {
    
    let phonebookEl = document.getElementById("phonebook");

    let btnLoad = document.getElementById("btnLoad");
    btnLoad.addEventListener("click", function(){
        phonebookEl.innerHTML = "";

        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
        .then((res) => res.json())
        .then(function(data) {

            for (let item in data) {
                let personName = data[item].person;
                let personPhone = data[item].phone;

                let li = document.createElement("li");
                li.innerHTML = `${personName}: ${personPhone}`;

                let del = document.createElement("button");
                del.textContent = "Delete";
                del.addEventListener("click", function(event){
                    fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
                    .then((res) => res.json())
                    .then(function(data) {

                        let targetName = event.target.parentElement.innerHTML.split(": ")[0];
                        console.log(data.length);
                        for (let item in data) {
                            let personName = data[item].person;
                            let personPhone = data[item].phone;

                            if (targetName == personName) {
                                console.log(personName);
                                console.log(Object.key(data[item]));
                                // Zaebi nanovo tre se po4ne toq shit
                            }
                        }

                      
                    });
                });
                li.appendChild(del);
                phonebookEl.appendChild(li);
            }

        })

    });

    let btnCreate = document.getElementById("btnCreate");
    btnCreate.addEventListener("click", function(){
        let personEl = document.getElementById("person");
        personVal = personEl.value;
        personEl = "";

        let phoneEl = document.getElementById("phone");
        phoneVal = phoneEl.value;
        phoneEl = "";

        // validate strings
        if (personVal.length <= 0 || phoneVal.length <= 0) {
            return;
        }

        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json", {
            method: 'POST',
            headers : new Headers(),
            body:JSON.stringify({person:personVal, phone:phoneVal})
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

        btnLoad.click();
        
    })

}

attachEvents();