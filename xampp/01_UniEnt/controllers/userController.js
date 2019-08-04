const userController = function () {

    const kinveyBaseUrl = "https://baas.kinvey.com";
    const kinveyAppKey = "kid_BkhXN1mGS";
    const kinveyAppSecret = "1cf5f904786c4199a5b77f36384729be";
    const kinveyAppAuthHeaders = {
        "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
      };

    const getRegister = function (context) {

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/registerPage.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/loginPage.hbs')
        })
    };

    const postRegister = function (context) {

        let userData = {
            username: context.params.username,
            password: context.params.password
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "/user/" + kinveyAppKey + "/",
            data: userData,
            headers: kinveyAppAuthHeaders,
            success: registerUserSuccess,
            error: registerUserError
        });

        function registerUserSuccess(data) {
            console.log(data);
            sessionStorage.setItem("userInfo", JSON.stringify(data));
            sessionStorage.setItem("authToken", data._kmd.authtoken);

            $("#successBox").text("Register successful.");
            $("#successBox").show();
            setTimeout(function(){
                $("#successBox").fadeOut();
                homeController.getHome(context); // Load the homepage
            }, 1000);
            
        }

        function registerUserError(data) {
            console.log(data);
            console.log("register error")
            showErrorBox(data.responseJSON.description);
        }

    };

    const postLogin = function (context) {

        let userData = {
          username: context.params.username,
          password: context.params.password
        };

        $.ajax({
          method: "POST",
          url: kinveyBaseUrl + "/user/" + kinveyAppKey + "/login",
          data: userData,
          headers: kinveyAppAuthHeaders,
          success: loginUserSuccess,
          error: loginUserError
        });

        function loginUserSuccess(data) {
            sessionStorage.setItem("userInfo", JSON.stringify(data));
            sessionStorage.setItem("authToken", data._kmd.authtoken);

            console.log("Login successful.");
            $("#successBox").text("Login successful.");
            $("#successBox").show();
            setTimeout(function(){
                $("#successBox").fadeOut();
                homeController.getHome(context); // Load the homepage
            }, 1000);
            
        }

        function loginUserError(data) {
            console.log(data);
            console.log("Login error");
            showErrorBox(data.responseJSON.description);
        }

    };

    const postLogout = function (context) {
       
        const authToken = sessionStorage.getItem('authToken');
       
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "/user/" + kinveyAppKey + "/_logout",
            headers: {
                "authorization": `Kinvey ${authToken}`,
                "cache-control": "no-cache",
            },
            success: logoutUserSuccess,
            error: logoutUserError
        });

        function logoutUserSuccess() {
            console.log('logout was successful');
            sessionStorage.clear(); // Clear user auth data

            $("#successBox").text("Logout successful.");
            $("#successBox").show();
            setTimeout(function(){
                $("#successBox").fadeOut();
                homeController.getHome(context); // Load the homepage
            }, 1000);

        }

        function logoutUserError(data) {
            console.log(data);
            console.log("Logout error");
            showErrorBox(data.responseJSON.description);
        }
     
    };

    return {
        getRegister,
        getLogin,
        postRegister,
        postLogin,
        postLogout
    }
}();