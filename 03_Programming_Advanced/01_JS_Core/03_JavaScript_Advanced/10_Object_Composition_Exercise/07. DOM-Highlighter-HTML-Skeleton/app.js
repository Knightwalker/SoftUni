function solve(selector) {
    const element = document.querySelector(selector);
    element.classList.add('highlight');
    highlightChildren(element);
    function highlightChildren(element) {
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
            highlightChildren(children[i]);
            children[i].classList.add('highlight');
        }
    }
}

solve('#content');