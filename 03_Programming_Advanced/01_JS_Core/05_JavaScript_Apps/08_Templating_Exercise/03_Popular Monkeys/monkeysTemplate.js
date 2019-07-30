(function () {
    renderMoneysTemplate();

    function renderMoneysTemplate() {
        let template = document.getElementById("monkey-template").innerHTML;
        let compiledTemplate = Handlebars.compile(template);
        context = {
            monkeys: monkeys
        }
        document.getElementById("allMonkeys").innerHTML = compiledTemplate(context);
    }

})()
