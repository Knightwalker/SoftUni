const homeController = function () {

    const getHome = function (context) {

        console.log(context);
        const loggedIn = sessionStorage.getItem('userInfo') !== null;
          
        if(loggedIn){
            const username = JSON.parse(sessionStorage.getItem('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/home/homePage.hbs')
        })

    };

    return {
        getHome
    }
}();