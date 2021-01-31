function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);
    
    let pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
    function onChange() {
        if (pattern.test(inputElement.value)) {
            inputElement.removeAttribute("class");
        } else {
            inputElement.setAttribute("class", "error");
        }
    }
    
}