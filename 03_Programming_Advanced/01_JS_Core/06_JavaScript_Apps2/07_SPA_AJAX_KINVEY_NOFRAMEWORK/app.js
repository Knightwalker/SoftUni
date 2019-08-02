const app = Sammy("#main", function () {

  //this.use('Handlebars', 'hbs');

  // Home
  this.route('get', '#/', function(){
    alert("otvori home");
  });

  // User
  this.route('get', '#/login', function(){
    loginUser();
    return false;
  });
   
});

(() => {
  app.run('#/');
})();


function startApp() {
  sessionStorage.clear(); // Clear user auth data
  showHideMenuLinks();



  



  function showHideMenuLinks() {
    $("#menu a").hide();

    if (sessionStorage.getItem("authToken")) {
      // Logged in user
      $("#linkHome").show();
      $("#linkListBooks").show();
      $("#linkCreateBook").show();
      $("#linkLogout").show();
    } else {
      // No user login
      $("#linkHome").show();
      $("#linkLogin").show();
      $("#linkRegister").show();  
    }

  }

  function showView(viewName) {
    // Hide all views and show the selected view only
    $("main > section").hide();
    $("#" + viewName).show();
  }


  function listBooks() {

  }

  function showCreateBookView() {
    $("#formCreateBook").trigger("reset");
    showView("viewCreateBook");
  }



  // Bind the form submit button
  $("#buttonLoginUser").click(loginUser);
  $("#buttonRegisterUser").click(registerUser);
  $("#buttonCreateBook").click(createBook);
  $("#buttonEditBook").click(editBook);

  const kinveyBaseUrl = "https://baas.kinvey.com/";
  const kinveyAppKey = "kid_BkhXN1mGS";
  const kinveyAppSecret = "1cf5f904786c4199a5b77f36384729be";
  const kinveyAppAuthHeaders = {
    "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
  };

  function registerUser() {
    let userData = {
      username: $("#formRegister input[name=username").val(),
      password: $("#formRegister input[name=passwd]").val()
    };

    $.ajax({
      method: "POST",
      url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
      data: JSON.stringify(userData),
      contentType: "application/json",
      headers: kinveyAppAuthHeaders,
      success: registerUserSuccess,
      error: handleAjaxError
    });

    function registerUserSuccess(userInfo) {
      saveAuthInSession(userInfo);
      showHideMenuLinks();
      listBooks();
      showInfo("User registration successfuly.");
    }

  }

    function saveAuthInSession(userInfo) {
      sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
      sessionStorage.setItem("userId", userInfo._id);
      sessionStorage.setItem("username", userInfo.username);
      $("#loggedInUser").text("Welcome, " + userInfo.username + "!");
      listBooks();
    }

    function handleAjaxError(response) {
      let errorMsg = JSON.stringify(response);
      if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error";
      }
      if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
      }
      showError(errorMsg);
    }

    function showError(errorMsg) {
      $("#errorBox").text("Error " + errorMsg);
      $("#errorBox").show();
    }

    function showInfo(message) {
      console.log("vliza");
      $("#infoBox").text(message);
      $("#infoBox").show();
      setTimeout(function(){
        $("#infoBox").fadeOut();
      }, 3000);
    }



  function logoutUser() {
    sessionStorage.clear();
    $("#loggedInUser").text("");
    showHideMenuLinks();
    showInfo("Logout successful");
  }

  function createBook() {

  }

  function editBook() {

  }



  // Bind the info / error boxes: hide on click
  $("#infoBox, #errorBox").click(function(){
    $(this).fadeOut();
  });

  // Attach AJAX "loading" event listener
  $(document).on({
    ajaxStart: function() { $("#loadingBox").show() },
    ajaxStop: function() { $("#loadingBox").hide() }
  }); 

}