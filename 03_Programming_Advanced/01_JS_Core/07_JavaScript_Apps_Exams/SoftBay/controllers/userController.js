const userController = function () {

  const getRegister = function (context) {
     
    // Draw the view -> render when ready
    context.render('../views/register.hbs', {
      'myVariable': 'Some value'
      }, function(view) {
        //console.log(view);
        document.getElementById("root").innerHTML = view;
      }, {
        header: "../views/header.hbs",
        footer: "../views/footer.hbs"
    });

  };

  const getLogin = function (context) {
     
    // Draw the view -> render when ready
    context.render('../views/login.hbs', {
      'myVariable': 'Some value'
      }, function(view) {
        //console.log(view);
        document.getElementById("root").innerHTML = view;
      }, {
        header: "../views/header.hbs",
        footer: "../views/footer.hbs"
    });

  };

  const postRegister = function (context) {

    let username = context.params.username;
    let password = context.params.password;
    let rePassword = context.params.rePassword;

    // Validation
    if (password != rePassword) {
      console.log("ERROR: Passwords do not match!");
      return;
    }

    let data = {
      username: username,
      password: password,
    };

    $.ajax({
      method: "POST",
      url: `${kinveyBaseUrl}/user/${kinveyAppKey}/`,
      data: JSON.stringify(data),
      headers: kinveyAppAuthHeaders2,
      success: registerUserSuccess,
      error: registerUserError
    });
     
    function registerUserSuccess(response) {
      console.log("SUCCESS: Register");
      console.log(response);
      
      let userInfo = {
        username: response.username,
        userId: response._id,
        authToken: response._kmd.authtoken
      }

      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      window.location.href = "#/home";
    }

    function registerUserError(response) {
      console.log("ERROR: Register");
      console.log(response);
    }
    
  };


  const postLogin = function (context) {
    
    let username = context.params.username;
    let password = context.params.password;

    let data = {
      username: username,
      password: password
    };
    
    $.ajax({
      method: "POST",
      url: `${kinveyBaseUrl}/user/${kinveyAppKey}/login`,
      data: data,
      headers: kinveyAppAuthHeaders,
      success: loginUserSuccess,
      error: loginUserError
    });

    function loginUserSuccess(response) {
      console.log("SUCCESS: Login");
      console.log(response);

      let userInfo = {
        username: response.username,
        userId: response._id,
        authToken: response._kmd.authtoken
      }

      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      window.location.href = "#/home";
    }

    function loginUserError(response) {
      console.log(response);
    }

  };

  
  const postLogout = function (context) {

    let currentUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    $.ajax({
      method: "POST",
      url: `${kinveyBaseUrl}/user/${kinveyAppKey}/_logout`,
      data: {},
      headers: {
        "authorization": "Kinvey " + currentUserInfo.authToken
      },
      success: logoutUserSuccess,
      error: logoutUserError
    });

    function logoutUserSuccess(response) {
      console.log('SUCCESS LOGOUT');
      console.log(response);

      sessionStorage.removeItem("userInfo");
      window.location.replace("#/home");

      // Draw the view -> render when ready
      context.render('../views/home.hbs', {
        'myVariable': 'Some value'
        }, function(view) {
        //console.log(view);
        document.getElementById("root").innerHTML = view;
      }, {
        header: "../views/header.hbs",
        footer: "../views/footer.hbs"
      });
    }

    function logoutUserError(response) {
      console.log('ERROR LOGOUT');
      console.log(response);
    }
     
  };

  return {
      getRegister,
      getLogin,
      postRegister,
      postLogin,
      postLogout,
  }
}();