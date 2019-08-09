const homeController = function () {

  const getHome = function (context) {

    console.log("You're in the Main route");
    console.log(context);

    // Check if user is logged in
    const loggedIn = sessionStorage.getItem('userInfo') !== null;
      
    if(loggedIn){
        const username = JSON.parse(sessionStorage.getItem('userInfo')).username;
        context.loggedIn = loggedIn;
        context.username = username;
    }

    // Draw the view -> render when ready
    context.render('./views/home.hbs', {
      'myVariable': 'Some value'
      }, function(view) {
      
      document.getElementById("root").innerHTML = view;
    }, {
      header: "../views/header.hbs",
      footer: "../views/footer.hbs"
    });
      
  };

  return {
      getHome
  }
}();