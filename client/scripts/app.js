var App = {

  $spinner: $('.spinner img'),

  username: window.location.search.slice(10),

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Messages.initialize();

    // Fetch initial batch of messages
    // App.send();
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      Messages.messages = data.results;

      for (var i = 0; i < data.results.length; i++) {
        Messages.messages[i].username = Messages.messages[i].username || null;
        Messages.messages[i].text = Messages.messages[i].text || null;
        Messages.messages[i].roomname = Messages.messages[i].roomname || 'lobby';
        if (!Rooms.roomNames.includes(Messages.messages[i].roomname)) {
          Rooms.roomNames.push(Messages.messages[i].roomname);
        }
        MessagesView.renderMessage(data.results[i]);
      }
      
      callback();
    });
  },

  send: function(text = null, roomname = null) {
    Parse.create({
      username: App.username || null,
      text: text,
      roomname: roomname
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
