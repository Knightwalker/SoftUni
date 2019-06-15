function focus() {

    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(i => i.addEventListener('focus', onFocus)); 
    Array.from(inputs).forEach(i => i.addEventListener('blur', onBlur));
    function onFocus(event) {
        let input = event.target;
        input.parentNode.setAttribute('class', 'focused');
    }
    
    function onBlur(event) {
        let input = event.target;
        input.parentNode.removeAttribute('class');
    }
    
}

/* Non working for Judge solution
function focus() {
    
    let inputFields = Array.from(document.getElementsByTagName("input"));
    for (inputField in inputFields) {
        inputFields[inputField].addEventListener("click", Highlight);
    }
  
    function Highlight(e) {
        // clear highlingting for all
        for (inputField in inputFields) {
          inputFields[inputField].parentElement.removeAttribute('class');
        }

        // highlight target
        let targetParentEl = e.target.parentElement;
        targetParentEl.setAttribute('class', 'focused');
    }

}
*/