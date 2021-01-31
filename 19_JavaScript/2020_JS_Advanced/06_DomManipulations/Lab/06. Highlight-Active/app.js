function focus() {

    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(i => i.addEventListener('focus', onFocus)); 
    Array.from(inputs).forEach(i => i.addEventListener('blur', onBlur)); 

    function onFocus(e) {
        let input = e.target;
        input.parentElement.setAttribute('class', 'focused');
    }

    function onBlur(e) {
        let input = e.target;
        input.parentElement.removeAttribute('class');
    }

}