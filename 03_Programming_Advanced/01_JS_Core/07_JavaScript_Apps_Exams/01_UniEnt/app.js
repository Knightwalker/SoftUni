const app = Sammy("#root", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.postLogout);

    // Events
    this.get("#/createEvent", eventController.getCreateEvent);
    this.post("#/createEvent", eventController.postCreateEvent);
    
});

(() => {
    app.run('#/home');
})();

// BEGIN Notifications
// Attach AJAX "loading" event listener
$(document).on({
    ajaxStart: function() { $("#loadingBox").show(); },
    ajaxStop: function() { $("#loadingBox").hide(); }
}); 

function showSuccessBox(message) {
    $("#successBox").text(message);
    $("#successBox").show();
    setTimeout(function(){
        $("#successBox").fadeOut();
    }, 3000);
}

function showErrorBox(errorMsg) {
    $("#errorBox").text(errorMsg);
    $("#errorBox").show();

    $('#errorBox').click(function() {
        $('#errorBox').hide();
    });
}
// END Notifications