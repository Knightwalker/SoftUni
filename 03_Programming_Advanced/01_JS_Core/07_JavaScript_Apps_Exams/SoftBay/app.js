window.onload = function(){

  Sammy("#root", function(){

    this.use("Handlebars", "hbs");

    // Home
    this.get("/", homeController.getHome);
    this.get("#/home", homeController.getHome);

    // User
    this.get("#/register", userController.getRegister);
    this.get("#/login", userController.getLogin);
    
    this.get("#/logout", userController.postLogout);

    this.post("#/register", userController.postRegister);
    this.post("#/login", userController.postLogin);

  }).run("/");

};