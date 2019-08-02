function loginUser() {

  console.log(this.params['username']);

  // let userData = {
  //   username: $('#formLogin input[name=username]').val(),
  //   password: $('#formLogin input[name=password]').val()
  // };

  // console.log(userData);

  // $.ajax({
  //   method: "POST",
  //   url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
  //   data: userData,
  //   headers: kinveyAppAuthHeaders,
  //   success: loginUserSuccess,
  //   error: handleAjaxError
  // });

  // function loginUserSuccess(userInfo) {
  //   sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
  //   sessionStorage.setItem("userId", userInfo._id);
  //   sessionStorage.setItem("username", userInfo.username);

  //   showHideMenuLinks();
  //   listBooks();
  //   showInfo("Login successful.");
  // }


}