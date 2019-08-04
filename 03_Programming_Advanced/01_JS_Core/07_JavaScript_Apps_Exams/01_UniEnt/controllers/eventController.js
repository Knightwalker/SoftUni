const eventController = function() {

  const getCreateEvent = function(context) {
    
    const loggedIn = sessionStorage.getItem('userInfo') !== null;
          
    if(loggedIn){
        const username = JSON.parse(sessionStorage.getItem('userInfo')).username;
        context.loggedIn = loggedIn;
        context.username = username;
    }

    context.loadPartials({
      header: "../views/common/header.hbs",
      footer: "../views/common/footer.hbs"
    }).then(function () {
      this.partial('../views/events/createEvent.hbs')
    })
  };

  const postCreateEvent = function(context) {
    eventModel.createEvent(context.params);
  };

  return {
    getCreateEvent,
    postCreateEvent
  }

}();